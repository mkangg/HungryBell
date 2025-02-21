// importing asset
import titleImg from '../public/assets/TitleHungryBell.png'

// title scene with cute start page
export default class Title extends Phaser.Scene {
    // loading title image
    preload() {
        this.load.image('title', titleImg);
    }

    // adding title image and start game text
    create() {
        this.add.image(640, 360, 'title');
        this.start = this.add.text(1075, 600, 'START', { fontSize: 50, fontFamily: "Verdana", color: '#FAF9F6', strokeThickness: 2 });
        this.start.setInteractive();
        this.start.on("pointerdown", () => this.scene.start('Welcome'));
    }
}