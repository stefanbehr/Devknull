ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.levels.lvl1',
    'game.levels.mine',
    'game.levels.inn',
    'game.entities.hud',
    'game.entities.hellbeast',
    'game.entities.darkelf',
    'game.entities.player',
    'game.entities.ghost',
    'game.entities.npc1',
    'game.entities.npc2',
    'game.entities.npc3',
    'game.entities.princess'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	gravity: 0,
    hudTxt: new ig.Font('media/font.png'),
	
	init: function() {
		// Initialize your game here; bind keys etc.

		// Key bindings
		ig.input.bind(ig.KEY.UP_ARROW, 'up');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind(ig.KEY.SPACE, 'attack');
		ig.input.bind(ig.KEY.TAB, 'switch');
		ig.input.bind(ig.KEY.S, 'spell');
		this.loadLevel(LevelLvl1);

	},
	
	update: function() {
		// screen follows the player
		var player = this.getEntitiesByType(EntityPlayer)[0];
		if (player) {
			this.screen.x = player.pos.x - ig.system.width/2 + player.size.x/2;
			this.screen.y = player.pos.y - ig.system.height/2 + player.size.y/2;
		}
		
		// Update all entities and backgroundMaps
		this.parent();
        
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();		
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, window.innerWidth * .45, window.innerHeight * .45, 2 );

});

window.onresize = function (event) {
    ig.system.resize(window.innerWidth * .45, window.innerHeight * .45, 2 );
}
