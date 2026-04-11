const GameConfig = {
    GRAVITY: 600,
    PLAYER_SPEED: 210,
    PLAYER_JUMP: -480,
    BOMB_SPEED_BASE: 100,
    BOMB_SPEED_STEP: 30,
    STAR_COUNT: 12,
    COIN_VALUE: 10,
    LIVES_START: 3,
    LEVEL_TIME: 60,
    HIGH_SCORE_KEY: 'skyDrifterHighScore'
};

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#0d0d1a',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: GameConfig.GRAVITY },
            debug: false
        }
    },
    scene: [BootScene, MenuScene, GameScene, UIScene, GameOverScene, PauseScene]
};

const game = new Phaser.Game(config);