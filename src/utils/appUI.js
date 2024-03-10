const { BrowserWindow, app, ipcMain, Notification, BrowserView, screen } = require('electron');
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

function createBrowserView(win, htmlPath, x, y, w, h) {
    const view = new BrowserView(
        { webPreferences: { nodeIntegration: false, contextIsolation: true } }
    );

    view.setBounds({ x: x, y: y, width: w, height: h })
    view.webContents.loadFile(htmlPath);
    win.setBrowserView(view);
}

function createTopBarView(win) {
    const screenWidth = screen.getPrimaryDisplay().size['width'];
    const screenHeight = screen.getPrimaryDisplay().size['height'];
    createBrowserView(win, "build/topBar.html", 0, 0, screenWidth, screenHeight);
}

module.exports = { createWindow, createTopBarView };