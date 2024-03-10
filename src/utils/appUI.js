const { BrowserWindow, app, ipcMain, Notification, BrowserView, screen } = require('electron');
const path = require('path');

function createWindow() {
    const screenWidth = screen.getPrimaryDisplay().size['width'];
    const screenHeight = screen.getPrimaryDisplay().size['height'];
    const win = new BrowserWindow({
        width: screenWidth,
        height: screenHeight,
        backgroundColor: "white",
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            experimentalFeatures:true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    
    // Views:
    createBrowserView(
        win,
        "test/test1.html",
        0,
        0,
        screenWidth,
        screenHeight/20,
        "#00FF00"
    );

    createBrowserView(
        win,
        "test/test2.html",
        0,
        screenHeight/20,
        screenWidth/8,
        screenHeight-screenHeight/20,
        "#FF0000"
    );

    createBrowserView(
        win,
        "test/test3.html",
        screenWidth-screenWidth/20,
        screenHeight/20,
        screenWidth/20,
        screenHeight-screenHeight/20,
        "#FF00FF"
    );

    createBrowserView(
        win,
        "test/test4.html",
        screenWidth/8,
        screenHeight/20,
        screenWidth - screenWidth/8 - screenWidth/20,
        screenHeight-screenHeight/20,
        "#00FFFF"
    );

    win.maximize();
    return win;
}

function createBrowserView(win, htmlPath, x, y, w, h, color) {
    let view = new BrowserView(
        { webPreferences: { nodeIntegration: false, contextIsolation: true,
            experimentalFeatures:true } }
    );

    view.setBounds({ x: x, y: y, width: w, height: h })
    view.setBackgroundColor(color);
    view.webContents.loadFile(htmlPath);
    win.addBrowserView(view);
}

module.exports = { createWindow};