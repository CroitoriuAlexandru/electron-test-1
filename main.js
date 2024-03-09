
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
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html');
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

app.whenReady().then(createWindow)
