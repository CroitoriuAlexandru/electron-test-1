
const { BrowserWindow, app, ipcMain, Notification, BrowserView } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;
let win;
function createWindow() {
  win = new BrowserWindow({
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

  // win.loadFile('build/base.html');
  win.loadFile('build/topBar.html');
}

function createBrowserView(htmlPath, x, y, w, h) {
  const view = new BrowserView(
    { webPreferences: { nodeIntegration: false, contextIsolation: true } }
  );

  view.setBounds({ x: x, y: y, width: w, height: h })
  view.webContents.loadFile(htmlPath);
  win.setBrowserView(view);
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

ipcMain.on('notify', (_, message) => {
  new Notification({ title: 'Notifiation', body: message }).show();
})
ipcMain.handle('my-invokable-ipc', (event, args) => {
  console.log(args);
  const view = new BrowserView();

  view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
  view.webContents.loadURL(args);
  win.setBrowserView(view);

})

app.whenReady().then(() => {
  createWindow();
  createBrowserView("build/topBar.html", 0, 0, "1200", "100");

})
