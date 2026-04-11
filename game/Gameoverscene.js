// =============================================
//  GameOverScene.js — Game Over Screen
// =============================================

class GameOverScene extends Phaser.Scene {
    constructor() { super({ key: 'GameOverScene' }); }

    init(data) { this.finalScore = data.score || 0; this.finalLevel = data.level || 1; }

    create() {
        const W = 800, H = 550;
        this.add.image(W / 2, H / 2, 'sky').setDisplaySize(W, H);
        this.add.rectangle(W / 2, H / 2, W, H, 0x000000, 0.7);
        
        this.add.text(W / 2, 100, 'GAME OVER', { 
            fontFamily: "'Orbitron', sans-serif", 
            fontSize: '52px', 
            fontStyle: 'bold', 
            fill: '#f87171', 
            stroke: '#7f1d1d', 
            strokeThickness: 5 
        }).setOrigin(0.5);
        
        this.add.text(W / 2, 220, 'YOUR SCORE', { 
            fontFamily: "'Press Start 2P'", 
            fontSize: '11px', 
            fill: '#a78bfa' 
        }).setOrigin(0.5);
        
        this.add.text(W / 2, 258, String(this.finalScore).padStart(6, '0'), { 
            fontFamily: "'Orbitron', sans-serif", 
            fontSize: '44px', 
            fontStyle: 'bold', 
            fill: '#facc15', 
            stroke: '#78350f', 
            strokeThickness: 3 
        }).setOrigin(0.5);
        
        this.add.text(W / 2, 322, `REACHED LEVEL ${this.finalLevel}`, { 
            fontFamily: "'Press Start 2P'", 
            fontSize: '10px', 
            fill: '#c4b5fd' 
        }).setOrigin(0.5);
        
        this._makeBtn(W / 2 - 100, 430, 'RETRY', 0x4c1d95, 0x7c3aed, () => { 
            this.cameras.main.fadeOut(300, 0, 0, 0); 
            this.cameras.main.once('camerafadeoutcomplete', () => 
                this.scene.start('GameScene', { level: 1, score: 0, lives: GameConfig.LIVES_START })
            ); 
        });
        
        this._makeBtn(W / 2 + 100, 430, 'MENU', 0x1e3a5f, 0x3b82f6, () => { 
            this.cameras.main.fadeOut(300, 0, 0, 0); 
            this.cameras.main.once('camerafadeoutcomplete', () => 
                this.scene.start('MenuScene')
            ); 
        });
        
        this.cameras.main.fadeIn(400, 0, 0, 0);
    }
    
    _makeBtn(x, y, label, bgColor, borderColor, callback) {
        const bg = this.add.rectangle(x, y, 160, 44, bgColor)
            .setInteractive({ useHandCursor: true })
            .setStrokeStyle(2, borderColor);
        const txt = this.add.text(x, y, label, { 
            fontFamily: "'Press Start 2P'", 
            fontSize: '11px', 
            fill: '#f9fafb' 
        }).setOrigin(0.5);
        
        bg.on('pointerover', () => bg.setFillStyle(borderColor));
        bg.on('pointerout', () => bg.setFillStyle(bgColor));
        bg.on('pointerdown', callback);
    }
}