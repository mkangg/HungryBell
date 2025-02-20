import bellLemon from '../public/assets/bellLemon.png'
import cuteBell from '../public/assets/cuteBell.png'


export default class GameOver extends Phaser.Scene {
    init(data) {
        this.points = data.points;
    }

    preload() {
        this.load.image('bellLemon', bellLemon);
        this.load.image('cuteBell', cuteBell);
    }

    create() {
        this.bellSprite = this.add.sprite(1075, 325, 'bellLemon').setScale(0.5, 0.5);
        this.add.image(800, 500, 'cuteBell').setScale(0.6, 0.6);
        this.add.text(100, 200, 'Game Over\nPoints: ' + this.points, { fontSize: 50, fontFamily: "Verdana", color: 'black' });
        this.add.text(100, 350, "Thanks for playing!", { fontSize: 50, fontFamily: "Verdana", color: 'black' });
        this.playAgain = this.add.text(100, 500, "Play Again!", { fontSize: 50, fontFamily: "Verdana", color: 'black', backgroundColor: "#FDFD96" });
        this.playAgain.setInteractive();
        this.playAgain.on('pointerdown', () => { this.scene.start('Game') })
    }

    update() {

    }
}