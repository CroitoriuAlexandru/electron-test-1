
const { BrowserWindow, app, ipcMain, Notification, BrowserView } = require('electron');
const path = require('path');
const { createWindow } = require('./src/utils/appUI');
const { createTopBarView } = require('./src/utils/appUI');
const isDev = !app.isPackaged;
let win;


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
  win = createWindow();
  win.loadFile('build/base.html');
}).then(() => {
  createTopBarView(win);
})