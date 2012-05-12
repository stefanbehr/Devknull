ig.module(
	'game.entities.darkelf'
)
.requires(
	'impact.entity'
)
.defines(function() {
	EntityDarkelf = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/dark_elf.png', 36, 48),
		size: {x: 20, y: 34},
        offset: {x: 8, y: 14},
        zIndex: -7,
		direction: 2,
		directions: [
						{mx:0, my:-1},
						{mx:1, my:0},
						{mx:0, my:1},
						{mx:-1, my:0}
					],
		maxVel: 100,
		vel: {x: 0, y: 0},
		friction: {x: 100, y: 100},
		velGround: 50,
        health: 30, // Check for health == 0
        doesDamage: 1,
        attackRadius: 100,
        stopRadius: 75,
        followRadius: 200,
        following: false,
		init: function(x, y, settings) {
			this.parent(x, y, settings);
			// Add animations
			this.setupAnimation(this.direction);
		},
		attackPlayer: function() {
		},
		update: function() {
			// AI code
			var player = ig.game.getEntitiesByType(EntityPlayer)[0];
			if (player) {
				var px = player.pos.x;
				var py = player.pos.y;
				var enemyDist = this.euclidDist(px, py, this.pos.x, this.pos.y);
				if ((enemyDist <= this.followRadius) && (enemyDist > this.stopRadius)) {
					this.following = true;
					console.log(enemyDist, 'close enough', 'far away enough');
					// follow player
					var absxdist = Math.abs(px - this.pos.x);
					var absydist = Math.abs(py - this.pos.y);
					var above = this.pos.y < py;
					var left = this.pos.x < px;
					var xaligned = (this.pos.x == px);
					var yaligned = (this.pos.y == py);
					if (absxdist > absydist) {
						this.vel.y = 0;
						// move toward player on x axis only
						if (left) {
							this.direction = 1;
							this.vel.x = this.maxVel;
						} else if (xaligned) {
							this.vel.x = 0;
						} else {
							this.direction = 3;
							this.vel.x = -this.maxVel;
						}
					} else {
						// move toward player on y axis only
						this.vel.x = 0;
						if (above) {
							this.direction = 2;
							this.vel.y = this.maxVel;
						} else if (yaligned) {
							this.vel.y = 0;
						} else {
							this.direction = 0;
							this.vel.y = -this.maxVel;
						}
					}
				} else {
					this.following = false;
				}				
			}	

// 			var vel = this.velGround;
// 			vel = 0;
// 			this.vel.y = vel * this.directions[this.direction].my;
// 			this.vel.x = vel * this.directions[this.direction].mx;
// 
// 			if (ig.input.pressed('spell')) {
// 				ig.game.spawnEntity('EntitySpell', this.pos.x, this.pos.y, {owner: this});
// 			}

			// change animation between idle/running according to velocity
			if (this.vel.x != 0 || this.vel.y != 0) {
				this.currentAnim = this.anims.run;
			} else {
				this.currentAnim = this.anims.idle;
			}
			this.parent();
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
		check: function(other) {
			other.receiveDamage(this.doesDamage, this);
			console.log(other.health);
		},
		handleMovementTrace: function(res) {
			this.parent(res);
			if (res.collision.x || res.collision.y) {
				this.direction = (this.direction + 2) % 4;
			}
		},
		// collision stuff
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.PASSIVE,
		// helper method finding euclidean distance between two points
		euclidDist: function(x1, y1, x2, y2) {
			return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));
		},
		// add method here to check for walk collisions
	});

    EntitySpell = ig.Entity.extend({
		size: {x: 32, y: 32},
		animSheet: new ig.AnimationSheet('media/spell.png', 32, 32),
		maxVel: {x: 400, y: 400},
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.PASSIVE,
        zIndex: -12,
        lifetime: 1,
        ticks: 0,
        doesDamage: 10,
		vel: {x: 0, y: 0},
		owner: null,
		init: function(x, y, settings) {
			this.owner = settings.owner;
			// calculate some spawn offsets depending on baddie orientation
			var xadjust = yadjust = 0;
            var velocity = 400;
            this.direction = this.owner.direction;
			switch(this.owner.direction) {
				case(0):
                    this.vel.y = -velocity;
					yadjust = -this.size.y;
					break;
				case(1):
                    this.vel.x = velocity;
					xadjust = this.owner.size.x;
					break;
				case(2):
                    this.vel.y = velocity;
					yadjust = this.owner.size.y;
					break;
				case(3):
                    this.vel.x = -velocity;
					xadjust = -this.size.x;
					break;
			}
            this.parent(x+xadjust, y+yadjust, settings);
            this.addAnim('idle', 0.03, [0, 1, 2, 3, 2, 1]); // pulsate
            this.timeExist = new ig.Timer();
        },
		handleMovementTrace: function(res) {
			this.parent(res);
			if (res.collision.x || res.collision.y) {
				this.kill();
			}
		},
		check: function(other) {
            if (other.type == ig.Entity.TYPE.A) {
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
});