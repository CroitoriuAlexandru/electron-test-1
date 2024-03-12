const {
  BrowserWindow,
  app,
  ipcMain,
  Notification,
  BrowserView,
} = require("electron");
const path = require("path");
const { createWindow, getBrowserViewsMap } = require("./src/utils/appUI");
const isDev = !app.isPackaged;
const performDatabaseOperations = require("./src/dbo/utils");
const db = require("./src/dbo/models");
let win;
let browserViewsMap;

db.sequelize.sync();

app
  .whenReady()
  .then(() => {
    win = createWindow();
    browserViewsMap = getBrowserViewsMap();
    win.loadFile("build/base.html");

    ipcMain.handle("testToken", getToken);
  })
  .then(() => {
    // const AuthView = {
    //   htmlPath: "build/auth.html",
    //   x: 500,
    //   y: 500,
    //   w: 500,
    //   h: 500,
    //   name: "auth",
    // };
    // db.authToken.findOne().then((result) => {
    //   console.log("skahjdhfkjhgfjksdgfs", result);
    //   if (!result) {
    //     createBrowserView(win, AuthView);
    //   }
    // });
    // performDatabaseOperations();
    // createTopBarView(win);
    // createLeftSideView(win);
    // console.log(win.getBrowserViews());
  });

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

ipcMain.on("notify", (_, message) => {
  console.log(message);
  new Notification({ title: "Notifiation", body: message }).show();
});

ipcMain.on("newURL", (_, url) => {
  console.log(url);
  // console.log(x.id)
  browserViewsMap["cuiWindow"].webContents.loadURL(url, {
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.0.0 Safari/537.36",
  });
  // x.webContents.loadURL(url);
});

ipcMain.on("whatsappURL", (_, url) => {
  console.log(url);
  // x.webContents.loadURL(url, { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.0.0 Safari/537.36' });
  browserViewsMap["cuiWindow"].webContents.loadURL(url);
});

ipcMain.on("print", (_, url) => {
  console.log(url);
});

ipcMain.handle("my-invokable-ipc", (event, args) => {
  console.log(event);
  console.log(args);
  // const view = new BrowserView();

  // view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
  // view.webContents.loadURL(args);
  // win.setBrowserView(view);
});

ipcMain.on("setToken", (_, data) => {
  let currentTokens = db.authToken.findAll();
  console.log(currentTokens);
  if (currentTokens) db.authToken.destroy({ where: {} });
  db.authToken.create({ access: data.access, refresh: data.refresh });

  browserViewsMap["auth"].webContents.close();
});
async function getToken() {
  // console.log(tokens);
  return tokens;
}
