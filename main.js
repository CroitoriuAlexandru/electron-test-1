
const { BrowserWindow, app, ipcMain, Notification, BrowserView } = require('electron');
const path = require('path');
const { createWindow,getBrowserViewsMap } = require('./src/utils/appUI');
const isDev = !app.isPackaged;
let win;
let browserViewsMap;

app.whenReady().then(() => {
  win = createWindow();
  browserViewsMap = getBrowserViewsMap();
  win.loadFile('build/base.html');
}).then(() => {
  // createTopBarView(win);
  // createLeftSideView(win);
  console.log(win.getBrowserViews());
})
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
  console.log(message)
  // new Notification({ title: 'Notifiation', body: message }).show();
})

ipcMain.on('newURL', (_,url)=>
{
  // console.log(url);
  for(const x of win.getBrowserViews()){
    // console.log(x.id)
    if(x.webContents.id === browserViewsMap['cuiWindow']){
      // x.webContents.loadURL(url, {userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.0.0 Safari/537.36'});
      x.webContents.loadURL(url);
      break;
    }
  }
}
)
ipcMain.on('whatsappURL', (_,url)=>
{
  // console.log(url);
  for(const x of win.getBrowserViews()){
    // console.log(x.id)
    if(x.webContents.id === browserViewsMap['cuiWindow']){
      x.webContents.loadURL(url, {userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.0.0 Safari/537.36'});
      // x.webContents.loadURL(url);
      break;
    }
  }
}
)

ipcMain.handle('my-invokable-ipc', (event, args) => {
  console.log(event);
  console.log(args);
  // const view = new BrowserView();

  // view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
  // view.webContents.loadURL(args);
  // win.setBrowserView(view);

})
