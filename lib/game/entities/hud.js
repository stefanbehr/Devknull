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
    init: function( x, y, settings ) {
        //this.addAnim( 'idle', 1, [0] );
        this.parent( x, y, settings );
        this.pos.x=ig.game.screen.x;
        this.pos.y=ig.game.screen.y;
    },
    update: function(){
        this.pos.x=ig.game.screen.x;
        this.pos.y=ig.game.screen.y;
        if(ig.input.mouse.y<=20)
        {
            //console.log('mouse zone');
        }
        else
        {

        }
        this.parent();
    },
    draw: function(){
        this.parent();
        var player = this.getEntitiesByType(EntityPlayer)[0];
        font = new ig.Font('media/font.png');
        font.draw(player.health, 10, 10)
    }
});
});