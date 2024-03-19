const {
  BrowserWindow,
  app,
  ipcMain,
  Notification,
  BrowserView,
  screen,
} = require("electron");

const path = require("path");
const { createWindow } = require("./src/utils/appUI");
const isDev = !app.isPackaged;
const performDatabaseOperations = require("./src/dbo/utils");
const db = require("./src/dbo/models");
const {
  getBrowserViewsMap,
  createBrowserView,
  checkAuth,
} = require("./src/utils/utils");

let win;
const browserViewsMap = {
  layoutViews: {},
  openTabs: {},
};

app.whenReady().then(() => {
  const screenWidth = screen.getPrimaryDisplay().size["width"];
  const screenHeight = screen.getPrimaryDisplay().size["height"];
  let topHeight = 35;
  let leftWidth = 250;
  let rightWidth = 50;
  
  //! Sync database
  db.sequelize
    .sync()
    .then(() => {
      console.log("Database synchronized successfully.");
      db.openTabs.count().then((count) => {
        if (count === 0) {
          db.openTabs
            .create({ url: "www.google.com" })
            .then(() => {
              console.log("First record with www.google.com added successfully.");
              
              //! create the bropwser view
              let newView = new BrowserView({
                webPreferences: {
                  nodeIntegration: true,
                  // worldSafeExecuteJavaScript: false,
                  contextIsolation: true,
                  // experimentalFeatures: true,
                  preload: path.join(__dirname, "./src/utils/preload.js"),
                } 
              });
              newView.setBounds({
                x: leftWidth,
                y: topHeight,
                w: screenWidth - leftWidth - rightWidth,
                h: screenHeight - topHeight,
              });

            })
            .catch((error) => {
              console.error("Failed to add first record:", error);
            });
        }else {
          // get all the tabs
          db.openTabs.findAll().then((tabs) => {
            for (const [i, tab] of tabs.entries()) {
              let newView = new BrowserView({
                webPreferences: {
                  nodeIntegration: true,
                  // worldSafeExecuteJavaScript: false,
                  contextIsolation: true,
                  // experimentalFeatures: true,
                  preload: path.join(__dirname, "preload.js"),
                },
              });
              newView.setBounds({
                x: leftWidth,
                y: topHeight,
                w: screenWidth - leftWidth - rightWidth,
                h: screenHeight - topHeight,
              });
              newView.webContents.loadURL(tab.url);
              browserViewsMap.openTabs[tab.url] = newView;
              
            }
          });
       
        }
      });
    })
    .catch((error) => {
      console.error("Failed to synchronize database:", error);
    });

    //! create UI

  const UIViews = [
    {
      htmlPath: "pages/topBar.html",
      x: 0,
      y: 0,
      w: screenWidth,
      h: topHeight,
    },
    {
      htmlPath: "pages/leftSidebar.html",
      x: 0,
      y: topHeight,
      w: leftWidth,
      h: screenHeight - topHeight,
    },
    {
      htmlPath: "pages/rightSidebar.html",
      x: screenWidth - rightWidth,
      y: topHeight,
      w: rightWidth,
      h: screenHeight - topHeight,
    },
    {
      htmlPath: "pages/cuiWindow.html",
      x: leftWidth,
      y: topHeight,
      w: screenWidth - leftWidth - rightWidth,
      h: screenHeight - topHeight,
    },
    {
      htmlPath: "pages/organigram.html",
      x: leftWidth,
      y: topHeight,
      w: screenWidth - leftWidth - rightWidth,
      h: screenHeight - topHeight,
    },
  ];
  const AuthView = {
    htmlPath: "pages/auth.html",
    x: 0,
    y: 0,
    w: screenWidth,
    h: screenHeight,
  };

  win = new BrowserWindow({
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "white",
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      // worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      // experimentalFeatures: true,
      preload: path.join(__dirname, "src/utils/preload.js"),
    },
  });

  for (let view of UIViews) {
    browserViewsMap.layoutViews[view.htmlPath] = createBrowserView(win, view);
  }
  // console.log(browserViewsMap);

  //! check auth if the user token from the dbo is expierd or its not present, add auth view
  // checkAuth(win, AuthView);
  // browserViewsMap = getBrowserViewsMap();
  win.maximize();
  // win.loadFile("pages/base.html");
  win.loadFile("pages/leftSidebar.html");
  // win.loadFile("pages/leftSidebar.html");
  win.webContents.openDevTools();
  // console.log(getBrowserViewsMap());
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
  browserViewsMap["cuiWindow"].webContents.loadURL(url);
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
ipcMain.on("topView", (_, name) => {
  let viewList = win.getBrowserViews();
  for (const [i, x] of viewList.entries()) {
    if (browserViewsMap[name] === x) {
      win.setTopBrowserView(x);
    }
  }
});
ipcMain.on("printTest", (_, message) => {
  console.log("Print test", message);
});
ipcMain.on("setMainWindow", (_, url) => {
  console.log(url);
  console.log(browserViewsMap.layoutViews["pages/cuiWindow.html"]);
  browserViewsMap.layoutViews["pages/cuiWindow.html"].webContents.loadURL(url);
  win.setTopBrowserView(browserViewsMap.layoutViews["pages/cuiWindow.html"]);
});