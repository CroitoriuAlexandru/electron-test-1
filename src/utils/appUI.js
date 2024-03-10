const { BrowserWindow, app, ipcMain, Notification, BrowserView } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "white",
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.maximize();

    return win;
}
module.exports={createWindow};