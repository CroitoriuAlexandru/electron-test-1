
const { BrowserWindow, app, ipcMain, Notification, BrowserView } = require('electron');
const path = require('path');
const { createWindow,getBrowserViewsMap } = require('./src/utils/appUI');
const isDev = !app.isPackaged;
const performDatabaseOperations = require('./src/dbo/utils'); 
const db = require('./src/dbo/models');
let win;
let browserViewsMap;

db.sequelize.sync()

app.whenReady().then(() => {
  win = createWindow();
  browserViewsMap = getBrowserViewsMap();
  win.loadFile('build/base.html');
  
  ipcMain.handle('testToken', getToken);
}).then(() => {


  // performDatabaseOperations();
  
  
  // createTopBarView(win);
  // createLeftSideView(win);
  // console.log(win.getBrowserViews());
})

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

ipcMain.on('notify', (_, message) => {
  console.log(message)
  new Notification({ title: 'Notifiation', body: message }).show();
})

ipcMain.on('newURL', (_,url)=>
{
  console.log(url);
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
ipcMain.on('print', (_,url)=>
{
  console.log(url);
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
let tokens = ",msadnfsdf";

ipcMain.handle('getAuthToken', async ()=>{
  return tokens;
});

ipcMain.on('setAuthToken', (_,data)=>{
  let currentTokens = db.authToken.findAll();
  if(currentTokens){
    db.authToken.destroy({where: {}});
    db.authToken.create({access:data.access, refresh:data.refresh});
  }else {
    db.authToken.create({access:data.access, refresh:data.refresh});
  }
});
async function getToken(){
  // console.log(tokens);
  return tokens;
}