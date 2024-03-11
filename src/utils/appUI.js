const { BrowserWindow, app, ipcMain, Notification, BrowserView, screen } = require('electron');
const path = require('path');

const browserViewsMap = {};


function createWindow() {


    const screenWidth = screen.getPrimaryDisplay().size['width'];
    const screenHeight = screen.getPrimaryDisplay().size['height'];
    
    let topHeight = 35;
    let leftWidth = 250;
    let rightWidth = 50;
    
    const UIViews = [
        {
            "htmlPath": "build/topBar.html",
            "x": 0,
            "y": 0,
            "w": screenWidth,
            "h": topHeight,
            "name": "topBar"
        },
        {
            "htmlPath": "build/leftSidebar.html",
            "x": 0,
            "y": topHeight,
            "w": leftWidth,
            "h": screenHeight - topHeight,
            "name": "leftSidebar"
        },
        {
            "htmlPath": "build/rightSidebar.html",
            "x": screenWidth - rightWidth,
            "y": topHeight,
            "w": rightWidth,
            "h": screenHeight - topHeight,
            "name": "rightSidebar"
        },
         {
            "htmlPath": "build/cuiWindow.html",
            "x": leftWidth,
            "y": topHeight,
            "w": screenWidth - leftWidth - rightWidth,
            "h": screenHeight - topHeight,
            "name": "cuiWindow"
        }
    ];
    


    const win = new BrowserWindow({
        width: screenWidth,
        height: screenHeight,
        backgroundColor: "white",
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            // worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            // experimentalFeatures: true,
            preload: path.join(__dirname, './preload.js')
        }
    })
    win.webContents.openDevTools();
    // console.log(path.join(__dirname, '../../preload.js'))

    for(let view of UIViews){
        createBrowserView(win, view);
        console.log(view);
    }

    // Views:
    // createBrowserView(
    //     win,
    //     // "test/test4.html",
    //     "build/cuiWindow.html",
    //     leftWidth,
    //     topHeight,
    //     screenWidth - leftWidth - rightWidth,
    //     screenHeight - topHeight,
    //     "#00FFFF"
    // );

    // createBrowserView(
    //     win,
    //     // "test/test2.html",
    //     "build/leftSidebar.html",
    //     0,
    //     topHeight,
    //     leftWidth,
    //     screenHeight - topHeight,
    //     "#FF0000"
    // );

    // createBrowserView(
    //     win,
    //     // "test/test3.html",
    //     "build/rightSidebar.html",
    //     screenWidth - rightWidth,
    //     topHeight,
    //     rightWidth,
    //     screenHeight - topHeight,
    //     "#FF00FF"
    // );

    // createBrowserView(
    //     win,
    //     // "test/test1.html",
    //     "build/topBar.html",
    //     0,
    //     0,
    //     screenWidth,
    //     topHeight,
    //     "#00FF00"
    // );

    win.maximize();

    // win.webContents.openDevTools();
    return win;
}
function getBrowserViewsMap(){
    return browserViewsMap;
}
function createBrowserView(win, view) {
    let newView = new BrowserView(
        {
            webPreferences: {
                nodeIntegration: true,
                // worldSafeExecuteJavaScript: false,
                contextIsolation: true,
                // experimentalFeatures: true,
                preload: path.join(__dirname, 'preload.js')
            }
        }
    );
    newView.setBounds({ x: view.x, y: view.y, width: view.w, height: view.h })
    // newView.setBackgroundColor(color);
    newView.webContents.loadFile(view.htmlPath);
    browserViewsMap[view.name] = newView.webContents.id;


    win.addBrowserView(newView);

}

module.exports = { createWindow, getBrowserViewsMap };