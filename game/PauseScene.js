// =============================================
//  PAUSE SCENE — Sleek Pause Menu
// =============================================

class PauseScene extends Phaser.Scene {
    constructor() { 
        super({ key: 'PauseScene' }); 
    }
    
    init(data) { 
        this.gameScene = data.gameScene; 
    }
    
    create() {
        const W = 800, H = 550;
        
        // Modal panel
        const modal = this.add.rectangle(W/2, H/2, 480, 280, 0x0b0b1a, 0.92);
        modal.setStrokeStyle(2, 0xa855f7);
        modal.setShadow(0, 0, 30, 0x7c3aed);
        
        this.add.text(W/2, H/2 - 80, '✧  PAUSED  ✧', {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '36px',
            fontWeight: 'bold',
            fill: '#c4b5fd'
        }).setOrigin(0.5);
        
        // Resume button
        const resumeBtn = this.add.rectangle(W/2, H/2 - 10, 200, 48, 0x4c1d95, 0.9)
            .setInteractive({ useHandCursor: true });
        resumeBtn.setStrokeStyle(2, 0x8b5cf6);
        this.add.text(W/2, H/2 - 10, '▶ RESUME', {
            fontFamily: "'Space Grotesk'",
            fontSize: '16px',
            fontWeight: 'bold',
            fill: '#ffffff'
        }).setOrigin(0.5);
        
        // Menu button
        const menuBtn = this.add.rectangle(W/2, H/2 + 58, 200, 46, 0x1e293b, 0.85)
            .setInteractive({ useHandCursor: true });
        menuBtn.setStrokeStyle(1, 0x64748b);
        this.add.text(W/2, H/2 + 58, 'MENU', {
            fontFamily: "'Space Grotesk'",
            fontSize: '15px',
            fill: '#e2e8f0'
        }).setOrigin(0.5);
        
        // Button interactions
        resumeBtn.on('pointerdown', () => {
            this.gameScene.gameActive = true;
            this.gameScene.scene.resume();
            this.scene.stop();
        });
        
        menuBtn.on('pointerdown', () => {
            this.scene.stop('GameScene');
            this.scene.stop('UIScene');
            this.scene.start('MenuScene');
        });
        
        this.input.keyboard.on('keydown-ESC', () => {
            this.gameScene.gameActive = true;
            this.gameScene.scene.resume();
            this.scene.stop();
        });
        
        // Hover effects
        resumeBtn.on('pointerover', () => resumeBtn.setFillStyle(0x6d28d9));
        resumeBtn.on('pointerout', () => resumeBtn.setFillStyle(0x4c1d95));
        menuBtn.on('pointerover', () => menuBtn.setFillStyle(0x334155));
        menuBtn.on('pointerout', () => menuBtn.setFillStyle(0x1e293b));
    }
}