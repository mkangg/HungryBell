import Phaser from "phaser"
import bell from '../public/assets/bellMouthClosed.png'

export default class Game extends Phaser.Scene {
    // constructor() {
    //     super('game');
    // }
    preload() {
        this.load.image('bell', bell);
    }

    create() {
        this.add.sprite(600, 400, 'bell').setScale(0.1, 0.1);

    }

    update() {

    }
}