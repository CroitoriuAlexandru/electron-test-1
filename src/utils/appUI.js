const { BrowserWindow, app, ipcMain, Notification, BrowserView, screen } = require('electron');
const path = require('path');

const browserViewsMap = {};

function createWindow() {

    const screenWidth = screen.getPrimaryDisplay().size['width'];
    const screenHeight = screen.getPrimaryDisplay().size['height'];
    let topHeight = 35;
    let leftWidth = 250;
    let rightWidth = 50;

    const win = new BrowserWindow({
        width: screenWidth,
        height: screenHeight,
        backgroundColor: "white",
        autoHideMenuBar: true,
        webPreferences: {
            // nodeIntegration: true,
            // worldSafeExecuteJavaScript: true,
            // contextIsolation: true,
            // experimentalFeatures: true,
            preload: path.join(__dirname, './preload.js')
        }
    })
    console.log(path.join(__dirname, '../../preload.js'))

    // Views:
    createBrowserView(
        win,
        // "test/test4.html",
        "build/cuiWindow.html",
        leftWidth,
        topHeight,
        screenWidth - leftWidth - rightWidth,
        screenHeight - topHeight,
        "#00FFFF"
    );

    createBrowserView(
        win,
        // "test/test2.html",
        "build/leftSidebar.html",
        0,
        topHeight,
        leftWidth,
        screenHeight - topHeight,
        "#FF0000"
    );

    createBrowserView(
        win,
        // "test/test3.html",
        "build/rightSidebar.html",
        screenWidth - rightWidth,
        topHeight,
        rightWidth,
        screenHeight - topHeight,
        "#FF00FF"
    );

    createBrowserView(
        win,
        // "test/test1.html",
        "build/topBar.html",
        0,
        0,
        screenWidth,
        topHeight,
        "#00FF00"
    );

    win.maximize();

    // win.webContents.openDevTools();
    return win;
}

function createBrowserView(win, htmlPath, x, y, w, h, color) {
    let view = new BrowserView(
        {
            webPreferences: {
                nodeIntegration: true,
                worldSafeExecuteJavaScript: false,
                contextIsolation: true,
                // experimentalFeatures: true,
                // preload: path.join(__dirname, 'preload.js')
            }
        }
    );
    view.setBounds({ x: x, y: y, width: w, height: h })
    view.setBackgroundColor(color);
    view.webContents.loadFile(htmlPath);
    browserViewsMap[htmlPath.match(new RegExp("[a-zA-Z0-9]*.html"))] = view.webContents.id;







    win.addBrowserView(view);

}

module.exports = { createWindow, browserViewsMap };