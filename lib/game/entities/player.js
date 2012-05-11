ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function() {
	EntityPlayer = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/proto_1.png', 72, 96),
		size: {x: 72, y: 96},
		offset: {x: 4, y: 4},
		flip: false,
		init: function(x, y, settings) {
			this.parent(x, y, settings);
			
			// Add animations
			this.addAnim('idle', 1, [0]);
		}
	});
});