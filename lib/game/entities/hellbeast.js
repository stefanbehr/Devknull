ig.module(
	'game.entities.hellbeast'
)
.requires(
	'impact.entity'
)
.defines(function() {
	EntityHellbeast = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/hell_beast.png', 36, 48),
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
        detourDuration: 1,
        randomTurnProb: 0.001,
        detourTimer: null,
        stopped: false,
        detouring: false,
		attacking: false,
		init: function(x, y, settings) {
			this.parent(x, y, settings);
			// Add animations
			this.setupAnimation(this.direction);
		},
		update: function() {
			var oldDirection = this.direction;
			// AI code
			var player = ig.game.getEntitiesByType(EntityPlayer)[0];
			if (this.detouring && (this.detourTimer.delta() > this.detourDuration)) {
				this.detouring = false;
			}
			this.tryFollowingPlayer(player);
			// random wandering if not following or detouring
			if (!this.following && !this.detouring && !this.stopped) {
				var velocity = 0.25 * this.velGround;
				var rand = Math.random();
				if (rand > (1 - this.randomTurnProb)) {
					console.log(rand);
					this.direction = (this.direction + 1) % 4;
				}
				switch(this.direction) {
					case(0):
						this.vel.x = 0;
						this.vel.y = -velocity;
						break;
					case(1):
						this.vel.x = velocity;
						this.vel.y = 0;
						break;
					case(2):
						this.vel.x = 0;
						this.vel.y = velocity;
						break;
					case(3):
						this.vel.x = -velocity;
						this.vel.y = 0;
						break;
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

			if (oldDirection != this.direction) {
				this.setupAnimation(this.direction);
			}
			// change animation between idle/running according to velocity
			if ((this.vel.x > (0.25 * this.velGround)) || (this.vel.y > (0.25 * this.velGround))) {
				this.currentAnim = this.anims.run;
			} else if ((this.vel.x != 0) || (this.vel.y != 0)) {
				this.currentAnim = this.anims.walk;
			} else {
				this.currentAnim = this.anims.idle;
			}
			this.parent();
		},
		tryFollowingPlayer: function(player) {
			// check for player alive
			if (player) {
				var px, py;
				px = player.pos.x;
				py = player.pos.y;
				
				var enemyDist = this.euclidDist(px, py, this.pos.x, this.pos.y);
				
				if ((enemyDist <= this.followRadius) && (enemyDist > this.stopRadius)) {
					this.following = true;
					this.stopped = false;
					console.log(enemyDist, 'close enough', 'far away enough');

					var absxdist, absydist;
					absxdist = Math.abs(px - this.pos.x);
					absydist = Math.abs(py - this.pos.y);
					
					var above, left;
					above = (this.pos.y < py);
					left = (this.pos.x < px);
					
					var xaligned, yaligned;
					xaligned = (this.pos.x == px);
					yaligned = (this.pos.y == py);

					// follow player

					// go in direction of greatest gap
					if (((absxdist > absydist) && !this.detouring) || ((absxdist < absydist) && this.detouring)) {
						this.vel.y = 0;
						// move toward player on x axis only
						if (left) {
							this.direction = 1;
							this.vel.x = this.velGround;
						} else if (xaligned) {
							this.vel.x = 0;
						} else {
							this.direction = 3;
							this.vel.x = -this.velGround;
						}
					} else if (((absxdist > absydist) && this.detouring) || ((absxdist < absydist) && !this.detouring)) {
						// move toward player on y axis only
						this.vel.x = 0;
						if (above) {
							this.direction = 2;
							this.vel.y = this.velGround;
						} else if (yaligned) {
							this.vel.y = 0;
						} else {
							this.direction = 0;
							this.vel.y = -this.velGround;
						}
					}
				} else {
					if (enemyDist <= this.stopRadius) {
						this.stopped = true;
						this.vel.x = 0;
						this.vel.y = 0;
					} else {
						this.stopped = false;
					}
					this.following = false;
				}				
			}
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
			this.addAnim('walk', 0.14, runseq);
			this.addAnim('run', 0.07, runseq);
		},
		check: function(other) {
			other.receiveDamage(this.doesDamage, this);
			console.log(other.health);
		},
		handleMovementTrace: function(res) {
			this.parent(res);
			if (res.collision.x || res.collision.y) {
				var velocity = this.velGround;
				if (this.following) {
					// start timing detour
					this.detourTimer = new ig.Timer();
					this.detouring = true;
				} else {
					// turn around 180 degrees
					this.direction = (this.direction + 2) % 4;
					this.setupAnimation(this.direction);
				}
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