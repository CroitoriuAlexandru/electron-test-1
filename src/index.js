// Modules to control application life and create native browser window
const { app, BrowserWindow, BrowserView } = require("electron");
const { ipcMain } = require("electron/main");
const path = require("node:path");

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    minWidth: 600,
    minHeight: 200,
    // maxWidth: 600,
    // maxWidth: 200,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.maximize();
  // and load the index.html of the app.
  // mainWindow.loadFile("./src/indextest.html");
  mainWindow.loadFile("./src/index.html");
  // mainWindow.loadFile("./src/build/index.html");

  const view = new BrowserWindow({parent: mainWindow, modal: true, show: false});
  // view.webPreferences={
  //   nodeIntegration: false,
  //   contextIsolation: false,
  //   enableRemoteModule: true
  // }
  view.maximize();
  view.setBounds({ x: 220, y: 220, width: 600, height: 600});
  // view.webContents.loadURL("https://electronjs.org");
  view.webContents.loadFile("./src/index.html");
  // view.setBackgroundColor('#FFFFFF');
  // mainWindow.setBrowserView(view);
  // Open the DevTools.
  view.once(
    "ready-to-show",
    () => {
      view.show();
    }
  );
  mainWindow.webContents.openDevTools()

  // console.log(mainWindow.webContents);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  
  ipcMain.handle('ping', () => {
    return 'pong'}
    )

  createWindow();
  
  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
    // console.log(BrowserWindow.getAllWindows())
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them h
