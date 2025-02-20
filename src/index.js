import Phaser from 'phaser'
import Welcome from './Welcome'
import Game from './Game'
import GameOver from './GameOver'

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#FAF9F6',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 150 },
            debug: false
        }
    },
}

const game = new Phaser.Game(config)

game.scene.add('Welcome', Welcome)
game.scene.add('Game', Game)
game.scene.add('GameOver', GameOver)
game.scene.start('Welcome')
