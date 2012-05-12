ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function() {
	EntityPlayer = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/proto_1.png', 36, 48),
		size: {x: 20, y: 34},
        offset: {x: 8, y: 14},
        zIndex: -10,
		// key press name, corresponding velocity vector component magnitudes, orientation offset
		direction: 2,
		directions: [
						{key: 'up', mx:0, my:-1, dir: 0},
						{key: 'right', mx:1, my:0, dir: 1},
						{key: 'down', mx:0, my:1, dir: 2},
						{key: 'left', mx:-1, my:0, dir: 3}
					],
        weapons: ['sword', 'bow'],
        activeWeapon: 'sword',
		maxVel: {x: 150, y: 150},
		friction: {x: 100, y: 100},
		velGround: 150,
        health: 100, // Check for health == 0
        startPosition: null,
        invincible: true,
        invincibleDelay: 2,
        invincibleTimer: null,
        makeInvincible: function() {
        	this.invincible = true;
        	this.invincibleTimer.reset();
        },
		init: function(x, y, settings) {
			this.startPosition = {x: x, y: y};
			this.parent(x, y, settings);
			//this.weapon = ig.game.spawnEntity('EntityWeapon', this.pos.x, this.pos.y, {owner:this});
			// Add animations
			this.setupAnimation(this.direction);
			this.invincibleTimer = new ig.Timer();
			this.makeInvincible();
		},
		update: function() {
			// move left, right, up, or down
			var velocity = this.velGround;
			var keyPressed = false; // any key pressed?

			// iterate over direction objects, check for arrow key presses
			for (var i = 0; i < this.directions.length; i++) {
				var dirobj = this.directions[i];
				var key = dirobj.key;
				if (ig.input.state(key)) {
					keyPressed = true;
					var dir = dirobj.dir;
					var mx = dirobj.mx;
					var my = dirobj.my;
					this.vel.x = velocity * mx;
					this.vel.y = velocity * my;
					if (dir != this.direction) {
						this.direction = dir;
						this.setupAnimation(this.direction);
					}
					break;
				}
			}
			if (!keyPressed) {
				this.vel.x = this.vel.y = 0;
			}
			// change animation between idle/running according to velocity
			if (this.vel.x != 0 || this.vel.y != 0) {
				this.currentAnim = this.anims.run;
			} else {
				this.currentAnim = this.anims.idle;
			}

            // Switch Weapons
            if (ig.input.pressed('switch')) {
            	this.weapon.kill();
                this.activeWeapon = (this.activeWeapon == this.weapons[0]) ? 
                	this.weapons[1] : this.weapons[0];
	            //this.weapon = ig.game.spawnEntity('EntityWeapon', this.pos.x, this.pos.y, {owner: this});
            }

			// end invincibility if invincible period over
			if (this.invincible && (this.invincibleTimer.delta() > this.invincibleDelay)) {
				this.invincible = false;
				this.currentAnim.alpha = 1;
				this.weapon.currentAnim.alpha = 1;
				this.invincibleTimer = null;
			}
			
			this.parent();
		},
		draw: function() {
			if (this.invincible) {
				this.currentAnim.alpha = this.invincibleTimer.delta()/this.invincibleDelay * 1;
			}
			this.parent();
		},
		kill: function() {
			this.parent();
			this.weapon.kill();
			//ig.game.spawnEntity(EntityPlayer, this.startPosition.x, this.startPosition.y);
		},
		setupAnimation: function(offset) {
			var left = (offset == 3);
			// scale by 3 (states of walking), shift by 1 (standing still is in middle)
			offset = offset * 3 + 1;
			this.addAnim('idle', 1, [offset]);
			var runseq = [offset-1, offset, offset+1];
			if (left) {
				runseq = runseq.reverse();
			}
			this.addAnim('run', 0.07, runseq);
		},
		// collision stuff
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.NONE,
		collides: ig.Entity.COLLIDES.PASSIVE,
	});

    EntityArrow = ig.Entity.extend({
		size: {x: 32, y: 32},
		animSheet: new ig.AnimationSheet('media/arrow.png', 32, 32),
		maxVel: {x: 400, y: 400},
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.PASSIVE,
        zIndex: -12,
        lifetime: 1,
        doesDamage: 10,
        ticks: 0,
		vel: {x: 0, y: 0},
		init: function(x, y, settings) {
            this.parent(x, y, settings);
            var velocity = 400;
            this.direction = settings.owner.direction;
            switch(this.direction) {
                case 0:
                    this.vel.y = -velocity;
                    break;
                case 1:
                    this.vel.x = velocity;
                    break;
                case 2:
                    this.vel.y = velocity;
                    break;
                case 3:
                    this.vel.x = -velocity;
                    break;
            }
            this.addAnim('idle', 1, [this.direction]); // TODO: N-TH TILE MUST CORRESPOND TO N-TH DIRECTION
            this.timeExist = new ig.Timer();
        },
		handleMovementTrace: function(res) {
			this.parent(res);
			if (res.collision.x || res.collision.y) {
				this.kill();
			}
		},
		check: function(other) {
            if (other.type == ig.Entity.TYPE.B) {
			    other.receiveDamage(this.doesDamage, this);
            }
			this.kill();
		},
        update: function() {
            if (this.timeExist.delta() > this.lifetime) {
                this.kill();
            }
        	this.parent();
        }
	});

    EntityWeapon = ig.Entity.extend({
        size: {x: 32, y: 32}, //TODO ANIMATE WEAPON
        animSheet: new ig.AnimationSheet('media/weapons1.png', 32, 32),
        maxVel: {x: 150, y: 150},
        type: ig.Entity.TYPE.NONE,
        checkAgainst: ig.Entity.TYPE.B,
        collides: ig.Entity.COLLIDES.PASSIVE,
        weaponType: 'sword',
        hasHit: false,
        attackDuration: 0.25,
        attackTimer: 0,
        attacking: false,
        direction: 2,
        zIndex: -11,
		weaponDisplacements: {'sword': [{x: 3, y: 7},
        								{x: 1, y: 7},
        								{x: -16, y: 7},
        								{x: -18, y: 7}],
								'bow': [{x: 0, y: 4},
        								{x: -6, y: 8},
        								{x: -8, y: 4},
        								{x: -8, y: 8}]
		},
        init: function(x, y, settings) {
        	this.parent(x, y, settings);
            this.owner = settings.owner;
            this.weaponDisplace(this.weaponType);
            this.setupAnimation(this.direction);
        },
        handleMovementTrace: function(res) {
            // If collision, stop player
			if (res.collision.x || res.collision.y) {
                this.owner.vel.x = 0;
                this.owner.vel.y = 0;
            }
        },
        draw: function() {
        	if (this.owner.invincible) {
        		this.currentAnim.alpha = this.owner.invincibleTimer.delta()/this.owner.invincibleDelay * 1;
        	}
			this.parent();
        },
        check: function(other) {
            // Causes damage once every sword cycle.
            if(this.attacking && !this.hasHit && other.type == ig.Entity.TYPE.B && this.weaponType == 'sword') {
                other.receiveDamage(5, this);
                this.hasHit = true;
            }
        },
        update: function(settings) {
            this.weaponType = this.owner.activeWeapon;
            this.checkAttack();
            this.setupAnimation(this.owner.direction);
            if (this.weaponType == 'sword' && this.attacking) {
                this.currentAnim = this.anims.swing;
            } else if (this.weaponType == 'sword') {
                this.currentAnim = this.anims.idle;
            } else {
                this.currentAnim = this.anims.bow;
            }
            this.pos.x = this.owner.pos.x;
            this.pos.y = this.owner.pos.y;
            this.weaponDisplace(this.weaponType);
        },
		setupAnimation: function(dir) {
			var left = (dir == 3);
             // If going up, put weapon behind user
            this.zIndex = (dir % 3) ? -9 : -11;
            ig.game.sortEntitiesDeferred(); // Registers new zIndex.
			offset = dir * 3 + 1;
            bowoffset = 12; // 5th row
            left ? this.addAnim('idle', 1, [offset+1]) : this.addAnim('idle', 1, [offset-1]);
            var swingseq = [offset-1,
            				offset,
            				offset+1];
            if (left) {
            	swingseq = swingseq.reverse();
            }
            swingseq = swingseq.concat(swingseq.reverse());
            this.addAnim('swing', this.attackDuration, swingseq);
            this.addAnim('bow', 1, [dir + bowoffset]);
        },
        checkAttack: function() {
            if (this.weaponType == 'sword') {
                if (ig.input.pressed('attack') && !this.attacking) {
                    this.attacking = true;
                    this.hasHit = false;
                    this.attackTimer = new ig.Timer();
                } else if (this.attacking) {
                    if (this.attackTimer.delta() >= this.attackDuration) {
                        this.attacking = false;
                        this.attackTimer = 0;
                        this.hasHit = false;
                    }
                }
            }
            if (this.weaponType == 'bow' && ig.input.pressed('attack')) {
                this.attacking = false;
                this.attackTimer = 0;
                this.hasHit = false;
                //ig.game.spawnEntity('EntityArrow', this.pos.x, this.pos.y, {dir:this.owner.direction, owner:this.owner});
            }
        },
    	weaponDisplace: function(weapon) {
    		// get array of x, y displacement dicts indexed by direction
			var displacements = this.weaponDisplacements[weapon];
			var dir = this.owner.direction;
			this.pos.x += displacements[dir].x;
			this.pos.y += displacements[dir].y;
        },
    });
});