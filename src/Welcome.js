// importing all assets
import bellOpen from '../public/assets/bellMouthOpen.png'
import bellClosed from '../public/assets/bellMouthClosed.png'
import frontBell from '../public/assets/frontBell.png'
import napaBell from '../public/assets/napaBell.jpg'
import napaBellSide from '../public/assets/napaBellSide.jpg'
import napaBellEyes from '../public/assets/napaBellEyes.jpg'
import next from '../public/assets/next.png'
import napa from '../public/assets/napa.png'
import lemon from '../public/assets/lemon.png'
import blueberry from '../public/assets/blueberry.png'
import treat from '../public/assets/treat.png'

// welcome page with instructions
export default class Welcome extends Phaser.Scene {
    // loading all assets 
    preload() {
        this.load.image('bellOpen', bellOpen);
        this.load.image('bellClosed', bellClosed);
        this.load.image('next', next);
        this.load.image('frontBell', frontBell);
        this.load.image('napaBell', napaBell);
        this.load.image('napaBellSide', napaBellSide);
        this.load.image('napaBellEyes', napaBellEyes);
        this.load.image('napa', napa);
        this.load.image('lemon', lemon);
        this.load.image('blueberry', blueberry);
        this.load.image('treat', treat);
    }

    create() {
        // creating idle Bell animation, Bell opens and closes mouth 
        this.anims.create({
            key: 'idleBell',
            frames: [
                { key: 'bellOpen', duration: 1000 },
                { key: 'bellClosed', duration: 1000 }
            ],
            frameRate: 1,
            repeat: -1
        })

        // adding Bell sprite with animation
        this.bellSprite = this.add.sprite(1075, 325, 'bellClosed').setScale(0.5, 0.5).play('idleBell');
        // adding instruction text and next button 
        this.inst = this.add.text(100, 175, 'Welcome to Hungry Bell!', { fontSize: 50, fontFamily: "Verdana", color: 'black' });
        this.nextButton = this.add.image(1100, 600, 'next').setScale(0.2, 0.2).setInteractive();
        this.nextButton.on("pointerdown", () => this.next1())
    }

    next1() {
        // removing Bell sprite
        this.bellSprite.setVisible(false);
        // adding Bell images 
        this.img1 = this.add.image(1100, 300, 'frontBell').setScale(0.6, 0.6);
        this.img2 = this.add.image(200, 550, 'napaBell').setScale(0.2, 0.2);
        this.img3 = this.add.image(500, 550, 'napaBellSide').setScale(0.2, 0.2);
        this.img4 = this.add.image(800, 550, 'napaBellEyes').setScale(0.2, 0.2);
        // Bell introduction text
        this.inst.setText('Meet Bell!\nShe loves to eat napa cabbage,\ntreats, and blueberries.');
        // removing previous next button and creating new one 
        this.nextButton.setVisible(false);
        this.nextButton.disableInteractive();
        this.nextButton1 = this.add.image(1100, 600, 'next').setScale(0.2, 0.2).setInteractive();
        this.nextButton1.on("pointerdown", () => this.next2())
    }

    next2() {
        // adding Bell sprite
        this.bellSprite.setVisible(true);
        // removing previous images
        this.img1.setVisible(false);
        this.img2.setVisible(false);
        this.img3.setVisible(false);
        this.img4.setVisible(false);
        // adding food images
        this.blueberry = this.add.image(200, 550, 'blueberry').setScale(0.5, 0.5);
        this.napa = this.add.image(500, 550, 'napa').setScale(0.8, 0.8);
        this.treat = this.add.image(800, 550, 'treat').setScale(0.8, 0.8);
        // adding instructions for the game
        this.inst.setText('Use the arrow keys\nto help her eat her favorite foods!');
        // removing previous next button and creating new one
        this.nextButton1.setVisible(false);
        this.nextButton1.disableInteractive();
        this.nextButton2 = this.add.image(1100, 600, 'next').setScale(0.2, 0.2).setInteractive();
        this.nextButton2.on("pointerdown", () => this.next3())
    }

    next3() {
        // removing previous images
        this.blueberry.setVisible(false);
        this.napa.setVisible(false);
        this.treat.setVisible(false);
        // adding instruction to avoid lemons
        this.inst.setText('Make sure to avoid the lemons!');
        // adding lemon image
        this.add.image(500, 550, 'lemon');
        // removing previous next button and creating new one
        this.nextButton2.setVisible(false);
        this.nextButton2.disableInteractive();
        this.nextButton3 = this.add.image(1100, 600, 'next').setScale(0.2, 0.2).setInteractive();
        // end of instructions, starting game
        this.nextButton3.on("pointerdown", () => this.scene.start('Game'))
    }
}