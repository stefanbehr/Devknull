ig.module(
    'game.entities.princessSpawn'
)
.requires(
    'impact.entity'
)
.defines(function(){
    EntityPrincessSpawn = ig.Entity.extend({
        name: 'princessSpawn',
        size: {x: 32, y: 56},
        zIndex:800,
        collides: ig.Entity.COLLIDES.NEVER,
        gravityFactor: 0,
        type:ig.Entity.TYPE.NONE,
    });
});