ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function() {
	EntityPlayer = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/proto_1.png', 36, 48),
		size: {x: 36, y: 48},
		flip: false,
		// key press name, corresponding velocity vector component magnitudes, orientation offset
		direction: 0,
		directions: [
						{key: 'up', mx:0, my:-1, dir: 0},
						{key: 'right', mx:1, my:0, dir: 1},
						{key: 'down', mx:0, my:1, dir: 2},
						{key: 'left', mx:-1, my:0, dir: 3}
					],
		maxVel: {x: 150, y: 150},
		friction: {x: 100, y: 100},
		velGround: 150,
		init: function(x, y, settings) {
			this.parent(x, y, settings);

			// Add animations
			this.setupAnimation(this.direction);
		},
		update: function() {
			// move left, right, up, or down
			var velocity = this.velGround;
			var keyPressed = false; // any key pressed?
			// iterate over direction objects, check for key presses
			for (var i = 0; i < this.directions.length; i++) {
				var dirobj = this.directions[i];
				var key = dirobj.key;
				if (ig.input.state(key)) {
					keyPressed = true;
					var dir = dirobj.dir;
					console.log(key);
					var mx = dirobj.mx;
					var my = dirobj.my;
					this.vel.x = velocity * mx;
					this.vel.y = velocity * my;
					console.log(dir);
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
			if (this.vel.x != 0 || this.vel.y != 0) {
				this.currentAnim = this.anims.run;
			} else {
				this.currentAnim = this.anims.idle;
			}
			this.parent();
		},
		setupAnimation: function(offset) {
			var left = false;
			if (offset == 3)
				left = true;
			// scale by 3 (states of walking), shift by 1 (standing still is in middle)
			offset = offset * 3 + 1;
			this.addAnim('idle', 1, [offset]);
			var runseq = [offset-1, offset, offset+1];
			if (left) {
				runseq = runseq.reverse();
			}
			this.addAnim('run', 0.07, runseq);
		},
	});
});