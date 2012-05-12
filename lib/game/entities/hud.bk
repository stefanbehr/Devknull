ig.module(
    'game.entities.hud'
)
.requires(
    'impact.entity'
)
.defines(function(){
EntityHud = ig.Entity.extend({
    size: {x: 320, y: 20},
    zIndex:800,
    //animSheet: new ig.AnimationSheet( 'media/hud.png', 320, 20 ),
    collides: ig.Entity.COLLIDES.NEVER,
    gravityFactor: 0,
    background: new ig.Image('media/hud.png'),
    init: function( x, y, settings ) {
        //this.addAnim( 'idle', 1, [0] );
        this.parent( x, y, settings );
        this.pos.x=ig.game.screen.x;
        this.pos.y=ig.game.screen.y;
    },
    update: function(){
        this.pos.x=ig.game.screen.x;
        this.pos.y=ig.game.screen.y;
        this.parent();
    },
    draw: function(){
        this.parent();
        var player = ig.game.getEntitiesByType(EntityPlayer)[0];
        font = new ig.Font('media/font.png');
        font.draw('HP: ' + player.health, 10, 10)
        this.background.draw(0, ig.game.screen.y - 2 * this.background.height)
    }
});
});