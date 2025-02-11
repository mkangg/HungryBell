import Phaser from "phaser"
import bellOpen from '../public/assets/bellMouthOpen.png'
import bellClosed from '../public/assets/bellMouthClosed.png'

import next from '../public/assets/next.png'

export default class Welcome extends Phaser.Scene {
    // constructor() {
    //     super('welcome');
    // }
    preload() {
        this.load.image('bellOpen', bellOpen);
        this.load.image('bellClosed', bellClosed);
        this.load.image('next', next);
    }

    create() {
        this.anims.create({
            key: 'idleBell',
            frames: [
                { key: 'bellOpen', duration: 1000 },
                { key: 'bellClosed', duration: 1000 }
            ],
            frameRate: 1,
            repeat: -1
        })

        this.add.sprite(800, 500, 'bellClosed').setScale(0.5, 0.5).play('idleBell');
        this.inst = this.add.text(200, 200, 'Welcome to Hungry Bell!');
        this.nextButton = this.add.image(1000, 600, 'next').setScale(0.2, 0.2).setInteractive();
        this.nextButton.on("pointerdown", () => this.next1())
    }

    next1() {
        console.log('next1');
        this.inst.setText('next1');
        this.nextButton.setVisible(false);
        this.nextButton.disableInteractive();
        this.nextButton1 = this.add.image(800, 600, 'next').setScale(0.2, 0.2).setInteractive();
        this.nextButton1.on("pointerdown", () => this.next2())
    }

    next2() {
        console.log('next2');
        this.inst.setText('next2');
        this.nextButton1.setVisible(false);
        this.nextButton1.disableInteractive();
        this.nextButton2 = this.add.image(800, 600, 'next').setScale(0.2, 0.2).setInteractive();
        this.nextButton2.on("pointerdown", () => this.begin())
    }

    begin() {
        this.scene.start('Game');
    }
}