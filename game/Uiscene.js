// =============================================
//  UIScene.js — HUD Overlay (Moved lower to avoid bar)
// =============================================

class UIScene extends Phaser.Scene {
    constructor() { super({ key: 'UIScene' }); }

    init(data) { this.gameScene = data.gameScene; }

    create() {
        const gs = this.gameScene;
        
        // HUD moved DOWN from Y:22 to Y:55 to be below browser bar
        this.add.rectangle(400, 55, 800, 44, 0x0d0d1a, 0.85);
        this.add.line(0, 0, 0, 55, 800, 55, 0x7c3aed, 0.5).setLineWidth(1).setOrigin(0);
        
        // Score
        this.add.text(14, 41, '★', { fontSize: '18px', fill: '#facc15' });
        this.scoreText = this.add.text(36, 41, String(gs.score).padStart(6, '0'), { 
            fontFamily: "'Press Start 2P'", 
            fontSize: '12px', 
            fill: '#fef9c3' 
        });
        
        // Level
        this.add.text(400, 41, `LVL ${gs.level}`, { 
            fontFamily: "'Press Start 2P'", 
            fontSize: '12px', 
            fill: '#a78bfa' 
        }).setOrigin(0.5, 0);
        
        // Lives
        this.livesText = this.add.text(786, 41, '❤️'.repeat(gs.lives), { 
            fontFamily: "'Press Start 2P'", 
            fontSize: '12px', 
            fill: '#f87171' 
        }).setOrigin(1, 0);
        
        // Timer
        this.timerText = this.add.text(668, 41, `${String(gs.timeLeft).padStart(2, '0')}s`, { 
            fontFamily: "'Press Start 2P'", 
            fontSize: '12px', 
            fill: '#86efac' 
        }).setOrigin(1, 0);
        this.add.text(672, 41, '⏱', { fontSize: '15px' }).setOrigin(0, 0);
        
        // Event listeners
        gs.events.on('scoreUpdate', (n) => this.scoreText.setText(String(n).padStart(6, '0')));
        gs.events.on('livesUpdate', (n) => this.livesText.setText('❤️'.repeat(Math.max(0, n))));
        gs.events.on('timeUpdate', (n) => this.timerText.setText(`${String(n).padStart(2, '0')}s`));
    }
}