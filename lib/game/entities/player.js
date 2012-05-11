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
		init: function(x, y, settings) {
			this.parent(x, y, settings);
			
			// Add animations
			this.addAnim('idle', 1, [4]);
		}
	});
});