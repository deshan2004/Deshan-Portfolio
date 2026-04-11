// =============================================
//  BootScene.js — Asset Preloading
// =============================================

class BootScene extends Phaser.Scene {
    constructor() { super({ key: 'BootScene' }); }

    preload() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        
        const barBg = this.add.rectangle(width / 2, height / 2, 440, 30, 0x1a1a2e);
        barBg.setStrokeStyle(2, 0xa78bfa);
        const barFill = this.add.rectangle(width / 2 - 210, height / 2, 0, 20, 0x7c3aed);
        const title = this.add.text(width / 2, height / 2 - 60, 'SKY DRIFTER', {
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '28px',
            fontStyle: 'bold',
            fill: '#a78bfa'
        }).setOrigin(0.5);
        const loadingText = this.add.text(width / 2, height / 2 + 40, 'LOADING...', {
            fontFamily: "'Press Start 2P'",
            fontSize: '10px',
            fill: '#c4b5fd'
        }).setOrigin(0.5);
        
        this.load.on('progress', v => {
            barFill.width = 420 * v;
            loadingText.setText(`LOADING... ${Math.floor(v * 100)}%`);
        });
        
        this.load.on('complete', () => {
            loadingText.setText('COMPLETE!');
            this.tweens.add({
                targets: [barBg, barFill, title, loadingText],
                alpha: 0,
                duration: 500,
                onComplete: () => this.scene.start('MenuScene')
            });
        });

        const BASE = 'https://labs.phaser.io/assets';
        this.load.image('sky', `${BASE}/skies/space3.png`);
        this.load.image('ground', `${BASE}/sprites/platform.png`);
        this.load.image('star', `${BASE}/demoscene/star.png`);
        this.load.image('bomb', `${BASE}/sprites/bomb.png`);
        this.load.image('particle', `${BASE}/particles/blue.png`);
        this.load.image('shield', 'https://labs.phaser.io/assets/sprites/shield.png');
        this.load.spritesheet('dude', `${BASE}/sprites/dude.png`, { frameWidth: 32, frameHeight: 48 });
    }

    create() { this.scene.start('MenuScene'); }
}