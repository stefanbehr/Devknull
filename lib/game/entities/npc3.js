ig.module(
	'game.entities.npc3'
)
.requires(
	'impact.entity'
)
.defines(function() {
	EntityNpc3 = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/norm_char3.png', 36, 48),
		size: {x: 20, y: 34},
        offset: {x: 8, y: 14},
        name: 'npc3',
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
        randomTurnProb: 0.001,
        init: function(x, y, settings) {
			this.parent(x, y, settings);
			this.setupAnimation(this.direction);
		},
		update: function() {			
			var oldDirection = this.direction;
			
			// AI code

			if (!this.following && !this.detouring && !this.stopped) {
				var velocity = 0.25 * this.velGround;
				var rand = Math.random();
				if (rand > (1 - this.randomTurnProb)) {
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
            if (!this.hasHit) {
			    other.receiveDamage(this.doesDamage, this);
			    console.log(other.health);
                this.hasHit = true;
                this.lastAttack = new ig.Timer();
            } else if(this.lastAttack.delta() >= this.attackLapse) {
                this.hasHit = false;
            }
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
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.NONE,
		collides: ig.Entity.COLLIDES.PASSIVE,
	});
});