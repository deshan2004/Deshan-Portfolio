class GameScene extends Phaser.Scene {
    constructor() { super({ key: 'GameScene' }); }

    init(data) {
        this.level = data.level || 1;
        this.score = data.score || 0;
        this.lives = data.lives !== undefined ? data.lives : GameConfig.LIVES_START;
        this.gameActive = true;
        this.timeLeft = GameConfig.LEVEL_TIME;
    }

    create() {
        const W = this.scale.width, H = this.scale.height;
        this.add.image(W / 2, H / 2, 'sky').setDisplaySize(W, H);

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 580, 'ground').setScale(2, 1).refreshBody();

        const layouts = {
            1: [[150, 450], [400, 350], [650, 450], [400, 200]],
            2: [[100, 480], [300, 380], [500, 280], [700, 180]],
            3: [[150, 500], [400, 420], [650, 340], [400, 250], [150, 170]]
        };

        const currentLayout = layouts[this.level] || layouts[1];
        currentLayout.forEach(pos => {
            this.platforms.create(pos[0], pos[1], 'ground').setScale(0.5, 0.5).refreshBody();
        });

        this.player = this.physics.add.sprite(150, 350, 'dude');
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);

        this.bombs = this.physics.add.group();

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);
        this.physics.add.collider(this.player, this.bombs, this._hitBomb, null, this);

        this._createStars();

        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.timerEvent = this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.timeLeft--;
                if (this.timeLeft <= 0) this._endGame();
            },
            loop: true
        });

        this.scene.launch('UIScene', { gameScene: this });
    }

    update() {
        if (!this.gameActive) return;

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-GameConfig.PLAYER_SPEED);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(GameConfig.PLAYER_SPEED);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(GameConfig.PLAYER_JUMP);
        }
    }

    _createStars() {
        this.stars = this.physics.add.group({
            key: 'star',
            repeat: GameConfig.STAR_COUNT - 1,
            setXY: { x: 50, y: 0, stepX: 60 }
        });

        this.stars.children.iterate(star => {
            star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            star.setCollideWorldBounds(true);
        });

        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.overlap(this.player, this.stars, this._collectStar, null, this);
    }

    _collectStar(player, star) {
        star.disableBody(true, true);
        this.score += GameConfig.COIN_VALUE;
        this.events.emit('scoreUpdate', this.score);

        const currentBombSpeed = GameConfig.BOMB_SPEED_BASE + (this.level * GameConfig.BOMB_SPEED_STEP);
        const x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        
        const bomb = this.bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-currentBombSpeed, currentBombSpeed), 20);
        
        if (this.stars.countActive(true) === 0) {
            this._nextLevel();
        }
    }

    _hitBomb(player, bomb) {
        this.lives--;
        this.events.emit('livesUpdate', this.lives);
        
        if (this.lives <= 0) {
            this._endGame();
        } else {
            bomb.destroy();
            this.player.setTint(0xff0000);
            this.physics.pause();
            this.time.delayedCall(1000, () => {
                this.player.clearTint();
                this.physics.resume();
                this.player.setPosition(150, 350);
            });
        }
    }

    _nextLevel() {
        this.scene.start('GameScene', { level: this.level + 1, score: this.score, lives: this.lives });
    }

    _endGame() {
        this.gameActive = false;
        this.physics.pause();
        this.scene.start('GameOverScene', { score: this.score, level: this.level });
    }
}