namespace SpriteKind {
    export const cam = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const Player2 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.ball, function (sprite, otherSprite) {
    Ballcounter2 += 1
    sprites.destroy(otherSprite)
    sprite.setImage(assets.image`Red_ball1`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player2, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.player2.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ballcounter >= 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 0)
        mySprite.setImage(assets.image`Red_ball0`)
        Ballcounter = 0
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Ballcounter2 >= 1) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, mySprite4, -100, 0)
        projectile2.setKind(SpriteKind.Projectile2)
        mySprite4.setImage(assets.image`Red_ball2`)
        Ballcounter2 = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ball, function (sprite, otherSprite) {
    Ballcounter += 1
    sprites.destroy(otherSprite)
    sprite.setImage(assets.image`Red_ball`)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let Ballcounter = 0
let Ballcounter2 = 0
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Red_ball0`, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 4))
info.setLife(3)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cam)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(5, 4))
scene.cameraFollowSprite(mySprite2)
mySprite4 = sprites.create(assets.image`Red_ball2`, SpriteKind.Player2)
controller.player2.moveSprite(mySprite4, 50, 50)
tiles.placeOnTile(mySprite4, tiles.getTileLocation(9, 4))
info.player2.setLife(3)
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        `, SpriteKind.ball)
    tiles.placeOnTile(mySprite3, value)
}
game.onUpdateInterval(5000, function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, SpriteKind.ball)
        tiles.placeOnTile(mySprite3, value)
    }
})
