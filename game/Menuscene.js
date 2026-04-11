// =============================================
//  MenuScene.js — Title / Main Menu
// =============================================

class MenuScene extends Phaser.Scene {
    constructor() { super({ key: 'MenuScene' }); }

    create() {
        const W = 800, H = 550;
        
        this.add.image(W / 2, H / 2, 'sky').setDisplaySize(W, H);
        this.add.rectangle(W / 2, H / 2, W, H, 0x000000, 0.55);
        
        // Floating stars
        for (let i = 0; i < 60; i++) {
            const x = Phaser.Math.Between(0, W);
            const y = Phaser.Math.Between(0, H);
            const dot = this.add.circle(x, y, Phaser.Math.FloatBetween(1, 3), 0xffffff, Phaser.Math.FloatBetween(0.2, 0.8));
            this.tweens.add({ 
                targets: dot, 
                y: y + Phaser.Math.Between(20, 80), 
                alpha: 0, 
                duration: Phaser.Math.Between(2000, 5000), 
                yoyo: true, 
                repeat: -1 
            });
        }
        
        this.add.text(400, 140, 'SKY', { 
            fontFamily: "'Orbitron', sans-serif", 
            fontSize: '72px', 
            fontStyle: 'bold', 
            fill: '#ffffff', 
            stroke: '#7c3aed', 
            strokeThickness: 6 
        }).setOrigin(0.5);
        
        this.add.text(400, 210, 'DRIFTER', { 
            fontFamily: "'Orbitron', sans-serif", 
            fontSize: '40px', 
            fontStyle: '900', 
            fill: '#a78bfa', 
            stroke: '#4c1d95', 
            strokeThickness: 4 
        }).setOrigin(0.5);
        
        const instructions = ['← →   MOVE', '↑     JUMP', '★     COLLECT STARS', '💣    AVOID BOMBS'];
        instructions.forEach((line, i) => {
            this.add.text(400, 300 + i * 28, line, { 
                fontFamily: "'Press Start 2P'", 
                fontSize: '10px', 
                fill: '#c4b5fd' 
            }).setOrigin(0.5);
        });
        
        const highScore = localStorage.getItem(GameConfig.HIGH_SCORE_KEY) || 0;
        this.add.text(400, 440, `HIGH SCORE: ${String(highScore).padStart(6, '0')}`, { 
            fontFamily: "'Press Start 2P'", 
            fontSize: '10px', 
            fill: '#facc15' 
        }).setOrigin(0.5);
        
        const startText = this.add.text(400, 490, '▶  PRESS SPACE TO START  ▶', { 
            fontFamily: "'Press Start 2P'", 
            fontSize: '12px', 
            fill: '#f9fafb' 
        }).setOrigin(0.5);
        
        this.tweens.add({ targets: startText, alpha: 0.2, duration: 600, yoyo: true, repeat: -1 });
        
        this.input.keyboard.once('keydown-SPACE', () => {
            this.cameras.main.fadeOut(500, 0, 0, 0);
            this.cameras.main.once('camerafadeoutcomplete', () => {
                this.scene.start('GameScene', { level: 1, score: 0, lives: GameConfig.LIVES_START });
            });
        });
        
        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(500, 0, 0, 0);
            this.cameras.main.once('camerafadeoutcomplete', () => {
                this.scene.start('GameScene', { level: 1, score: 0, lives: GameConfig.LIVES_START });
            });
        });
    }
}