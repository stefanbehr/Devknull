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
        this.player = ig.game.getEntitiesByType(EntityPlayer)[0];
    },
    update: function(){
        this.pos.x=ig.game.screen.x;
        this.pos.y=ig.game.screen.y;
        this.parent();
        this.drawBar('health'),
        this.drawBar('experience')
    },
    draw: function(){
        this.parent();
        this.background.draw(10,10);
    },
    drawBar: function(bar) {
        isHealth = (bar == 'health')
        bars = isHealth ? Math.floor(this.player.health / this.player.healthMax * 8) :
            Math.floor(this.player.experience / this.player.experienceMax * 8);
        disp_x = {'health': 6, 'experience': 36};
        disp_y = 8;
        bar_height = 11;
        chara = isHealth ? 'r' : 'g';
        for (i=0; i < bars; i++){
            yc = disp_y + 77 - i * bar_height;
            xc = disp_x[bar];
            if(i == 0) {
                image = 'media/' + chara + '_bar_bottom.png';
            } else if (i == 7) {
                image = 'media/' + chara + '_bar_top.png';
            } else {
                image = 'media/' + chara + '_bar_med.png';
            }
            im = new ig.Image(image);
            im.draw(xc, yc);
        }
    }
});
});