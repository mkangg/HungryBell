// importing assets
import bellLemon from '../public/assets/bellLemon.png'
import cuteBell from '../public/assets/cuteBell.png'

// this is the game over scene that displays the score and asks if user wants to play again
export default class GameOver extends Phaser.Scene {
    // getting data from game scene
    init(data) {
        this.points = data.points;
    }

    // loading assets
    preload() {
        this.load.image('bellLemon', bellLemon);
        this.load.image('cuteBell', cuteBell);
    }

    create() {
        // adding Bell Sprite image
        this.bellSprite = this.add.sprite(1075, 325, 'bellLemon').setScale(0.5, 0.5);
        // adding cute photo of Bell
        this.add.image(800, 500, 'cuteBell').setScale(0.6, 0.6);
        // displaying texts
        this.add.text(100, 200, 'Game Over\nPoints: ' + this.points, { fontSize: 50, fontFamily: "Verdana", color: 'black' });
        this.add.text(100, 350, "Thanks for playing!", { fontSize: 50, fontFamily: "Verdana", color: 'black' });
        // asking user if they want to play again 
        this.playAgain = this.add.text(100, 500, "Click here to play again!", { fontSize: 50, fontFamily: "Verdana", color: 'black', backgroundColor: "#FDFD96" });
        this.playAgain.setInteractive();
        this.playAgain.on('pointerdown', () => { this.scene.start('Game') })
    }
}