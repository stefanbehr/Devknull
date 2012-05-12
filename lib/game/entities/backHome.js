ig.module(
    'game.entities.backHome'
)
.requires(
    'impact.entity',
    'game.levels.lvl1'
)
.defines(function(){
    EntityBackHome = ig.Entity.extend({
        size: {x: 32, y: 56},
        zIndex:800,
        collides: ig.Entity.COLLIDES.PASSIVE,
        gravityFactor: 0,
        type:ig.Entity.TYPE.NONE,
        checkAgainst: ig.Entity.TYPE.A,
        check: function(other){
            if (other instanceof EntityPlayer) {
                ig.game.loadLevelDeferred(ig.global['Level'+'Lvl1'])
            }
        }
    });
});