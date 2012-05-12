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
    healthBar: [new ig.Image('media/r_bar_top.png'), new ig.Image('media/r_bar_med.png'), new ig.Image('media/r_bar_bottom.png')],
    experienceBar: [new ig.Image('media/g_bar_top.png'), new ig.Image('media/g_bar_med.png'), new ig.Image('media/g_bar_bottom.png')],
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
    },
    draw: function(){
        this.parent();
        this.background.draw(10,10);
        this.drawBar('health');
        this.drawBar('experience');
    },
    drawBar: function(bar) {
        isHealth = (bar == 'health');
        bars = isHealth ? Math.floor(this.player.health / this.player.maxHealth * 8) :
            Math.floor(this.player.experience / this.player.maxExperience * 8);
        disp_x = {'health': 16, 'experience': 46};
        disp_y = 18;
        bar_height = 11;
        chara = isHealth ? 'r' : 'g';
        for (i=0; i < bars; i++){
            yc = disp_y + 77 - i * bar_height;
            xc = disp_x[bar];
            if(i == 0) {
                ind = 2
            } else if (i == 7) {
                ind = 0;
            } else {
                ind = 1;
            }
            this[bar+'Bar'][ind].draw(xc, yc);
        }
    }
});
});