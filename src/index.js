import Phaser from 'phaser'
import Welcome from './Welcome'
import Game from './Game'

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
}

const game = new Phaser.Game(config)

game.scene.add('Welcome', Welcome)
game.scene.add('Game', Game)
game.scene.start('Welcome')
