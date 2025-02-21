// importing Phaser and all scenes
import Phaser from 'phaser'
import Title from './Title'
import Welcome from './Welcome'
import Game from './Game'
import GameOver from './GameOver'

// configurations for the game
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
            gravity: { y: 175 },
            debug: false
        }
    },
}

// creating game with custom configurations
const game = new Phaser.Game(config)

// adding all game scenes 
game.scene.add('Title', Title)
game.scene.add('Welcome', Welcome)
game.scene.add('Game', Game)
game.scene.add('GameOver', GameOver)
game.scene.start('Title')
