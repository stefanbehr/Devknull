ig.module(
    'game.entities.doorInn'
)
.requires(
    'impact.entity',
    'game.levels.inn'
)
.defines(function(){
    EntityDoorInn = ig.Entity.extend({
        size: {x: 32, y: 56},
        zIndex:800,
        collides: ig.Entity.COLLIDES.PASSIVE,
        gravityFactor: 0,
        type:ig.Entity.TYPE.NONE,
        checkAgainst: ig.Entity.TYPE.A,
        check: function(other){
            if (other instanceof EntityPlayer) {
                ig.game.loadLevelDeferred(ig.global['Level'+'Inn'])
            }
        }
    });
});