"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.app.on('ready', () => {
    const win = new electron_1.BrowserWindow({
        transparent: true,
        frame: false,
        backgroundColor: '#00000000',
        hasShadow: true,
        alwaysOnTop: false,
        webPreferences: {
            nodeIntegration: true
        },
        height: 360,
        width: 500
    });
    win.setResizable(false);
    const d = new Date(), day = d.getMonth() + '|' + d.getDate();
    win.loadFile(__dirname + `/html/${true ? 'xp/' : ''}index.html`); //day=='8|24'||day=='10|25'?
    console.log('initialized');
    win.on('ready-to-show', () => {
        win.show();
        console.log('showing');
    });
});
