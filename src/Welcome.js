import Phaser from "phaser"
import bellOpen from '../public/assets/bellMouthOpen.png'
import bellClosed from '../public/assets/bellMouthClosed.png'
import frontBell from '../public/assets/frontBell.png'
import napaBell from '../public/assets/napaBell.jpg'
import napaBellSide from '../public/assets/napaBellSide.jpg'
import napaBellEyes from '../public/assets/napaBellEyes.jpg'
import next from '../public/assets/next.png'

export default class Welcome extends Phaser.Scene {
    preload() {
        this.load.image('bellOpen', bellOpen);
        this.load.image('bellClosed', bellClosed);
        this.load.image('next', next);
        this.load.image('frontBell', frontBell);
        this.load.image('napaBell', napaBell);
        this.load.image('napaBellSide', napaBellSide);
        this.load.image('napaBellEyes', napaBellEyes);
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

        this.bellSprite = this.add.sprite(1150, 500, 'bellClosed').setScale(0.5, 0.5).play('idleBell');
        this.inst = this.add.text(100, 200, 'Welcome to Hungry Bell!', { fontSize: 50, fontFamily: "Verdana", color: 'black' });
        this.nextButton = this.add.image(1100, 700, 'next').setScale(0.2, 0.2).setInteractive();
        this.nextButton.on("pointerdown", () => this.next1())
    }

    next1() {
        this.bellSprite.setVisible(false);
        this.img1 = this.add.image(1100, 300, 'frontBell').setScale(0.6, 0.6);
        this.img1 = this.add.image(200, 550, 'napaBell').setScale(0.2, 0.2);
        this.img3 = this.add.image(500, 550, 'napaBellSide').setScale(0.2, 0.2);
        this.img4 = this.add.image(800, 550, 'napaBellEyes').setScale(0.2, 0.2);
        this.inst.setText('Meet Bell!\nShe loves to eat napa cabbage,\ntreats, and blueberries.');
        this.nextButton.setVisible(false);
        this.nextButton.disableInteractive();
        this.nextButton1 = this.add.image(1100, 700, 'next').setScale(0.2, 0.2).setInteractive();
        this.nextButton1.on("pointerdown", () => this.next2())
    }

    next2() {
        this.bellSprite.setVisible(true);
        this.img1.visible = false;
        this.img2.visible = false;
        this.img3.visible = false;
        this.img4.visible = false;
        this.inst.setText('Use the arrow keys\nto help her eat her favorite foods!');
        this.nextButton1.setVisible(false);
        this.nextButton1.disableInteractive();
        this.nextButton2 = this.add.image(1100, 700, 'next').setScale(0.2, 0.2).setInteractive();
        this.nextButton2.on("pointerdown", () => this.next3())
    }

    next3() {
        this.inst.setText('Make sure to avoid the lemons!');
        this.nextButton2.setVisible(false);
        this.nextButton2.disableInteractive();
        this.nextButton3 = this.add.image(1100, 700, 'next').setScale(0.2, 0.2).setInteractive();
        this.nextButton3.on("pointerdown", () => this.begin())
    }

    begin() {
        this.scene.start('Game');
    }
}