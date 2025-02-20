import Phaser from "phaser"
import bellMouthClosed from '../public/assets/bellMouthClosed.png'
import napa from '../public/assets/napa.png'
import lemon from '../public/assets/lemon.png'
import blueberry from '../public/assets/blueberry.png'
import treat from '../public/assets/treat.png'


export default class Game extends Phaser.Scene {
    preload() {
        this.load.image('bell', bellMouthClosed);
        this.load.image('napa', napa);
        this.load.image('lemon', lemon);
        this.load.image('blueberry', blueberry);
        this.load.image('treat', treat);
        this.points = 0;
    }

    create() {
        this.bell = this.physics.add.sprite(600, 800, 'bell').play('idleBell');
        this.bell.setScale(0.15, 0.15);
        this.bell.setSize(500, 675);
        this.bell.setCollideWorldBounds(true);

        this.pointsText = this.add.text(0, 0, 'Points: ' + this.points, { fontSize: 50, fontFamily: "Verdana", color: 'black' });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.lemons = this.physics.add.group();
        this.foods = this.physics.add.group();

        this.physics.add.collider(this.bell, this.lemons);
        this.physics.add.overlap(this.bell, this.lemons, this.endGame, null, this);

        this.physics.add.collider(this.bell, this.foods);
        this.physics.add.overlap(this.bell, this.foods, this.updatePoints, null, this);

        this.lemonEvent = this.time.addEvent({
            callback: this.addLemon,
            callbackScope: this,
            delay: 700,
            loop: true
        });

        this.foodEvent = this.time.addEvent({
            callback: this.addFood,
            callbackScope: this,
            delay: 800,
            loop: true
        });
    }

    update() {
        if (this.cursors.left.isDown) {
            this.bell.setVelocityX(-250);
        } else if (this.cursors.right.isDown) {
            this.bell.setVelocityX(250);
        } else {
            this.bell.setVelocityX(0);
        }
    }

    addLemon() {
        this.lemons.create(Phaser.Math.RND.between(50, 1230), 0, 'lemon').setScale(0.2, 0.2);
    }

    addFood() {
        let random = Phaser.Math.RND.between(1, 3);
        if (random == 1) {
            this.foods.create(Phaser.Math.RND.between(50, 1230), 0, 'blueberry').setScale(0.1, 0.1);
        } else if (random == 2) {
            this.foods.create(Phaser.Math.RND.between(50, 1230), 0, 'napa').setScale(0.2, 0.2);
        } else {
            this.foods.create(Phaser.Math.RND.between(50, 1230), 0, 'treat').setScale(0.2, 0.2);
        }
    }

    updatePoints(bell, food) {
        food.disableBody(true, true);
        this.points += 1;
        this.pointsText.setText('Points: ' + this.points);
    }

    endGame() {
        this.lemonEvent.destroy();
        this.foodEvent.destroy();
        this.physics.pause();
        this.cameras.main.setBackgroundColor("#FDFD96");
        this.time.delayedCall(2000, () => {
            this.scene.start('GameOver', { points: this.points });
        });
    }
}