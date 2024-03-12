const {
  BrowserWindow,
  app,
  ipcMain,
  Notification,
  BrowserView,
  screen,
} = require("electron");
const db = require("./../dbo/models");
const path = require("path");
// const endpoints = require("./../react/utils/endpoints");
const browserViewsMap = {};

function createWindow() {
  const screenWidth = screen.getPrimaryDisplay().size["width"];
  const screenHeight = screen.getPrimaryDisplay().size["height"];

  let topHeight = 35;
  let leftWidth = 250;
  let rightWidth = 50;

  const UIViews = [
    {
      htmlPath: "build/topBar.html",
      x: 0,
      y: 0,
      w: screenWidth,
      h: topHeight,
      name: "topBar",
    },
    {
      htmlPath: "build/leftSidebar.html",
      x: 0,
      y: topHeight,
      w: leftWidth,
      h: screenHeight - topHeight,
      name: "leftSidebar",
    },
    {
      htmlPath: "build/rightSidebar.html",
      x: screenWidth - rightWidth,
      y: topHeight,
      w: rightWidth,
      h: screenHeight - topHeight,
      name: "rightSidebar",
    },
    {
      htmlPath: "build/cuiWindow.html",
      x: leftWidth,
      y: topHeight,
      w: screenWidth - leftWidth - rightWidth,
      h: screenHeight - topHeight,
      name: "cuiWindow",
    },
  ];

  const AuthView = {
    htmlPath: "build/auth.html",
    x: 0,
    y: 0,
    w: screenWidth,
    h: screenHeight,
    name: "auth",
  };

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
      preload: path.join(__dirname, "preload.js"),
    },
  });
  // win.webContents.openDevTools();
  // console.log(path.join(__dirname, '../../preload.js'))
  for (let view of UIViews) {
    createBrowserView(win, view);
    // console.log(view);
  }
  db.authToken.findOne().then((result) => {
    console.log("skahjdhfkjhgfjksdgfs", result);
    if (result === null) {
      createBrowserView(win, AuthView);
    }
     else {
      fetch(endpoints.login.basic.updateToken, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh: result.refresh,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data && data.access) {
            db.authToken.findOne().then((result) => {
              db.authToken.destroy({ where: {} });
            });
            db.authToken.create({ access: data.access, refresh: data.refresh });
            console.log("skahjdhfkjhgfjksdgfs", data);
          } else {
            createBrowserView(win, AuthView);
          }
        });
    }
  });
  // console.log("jkashgdfjhasgdfkjhagsdfjkhasdgkfjh", authToken)

  // createBrowserView(win, AuthView);
  // create
  // win.maximize();
  // win.webContents.openDevTools();
  return win;
}
function getBrowserViewsMap() {
  return browserViewsMap;
}
function createBrowserView(win, view) {
  let newView = new BrowserView({
    webPreferences: {
      nodeIntegration: true,
      // worldSafeExecuteJavaScript: false,
      contextIsolation: true,
      // experimentalFeatures: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  console.log(__dirname, "./preload.js");
  newView.setBounds({ x: view.x, y: view.y, width: view.w, height: view.h });
  // newView.setBackgroundColor("rgba(255, 255, 255, 0)");
  newView.webContents.loadFile(view.htmlPath);
  browserViewsMap[view.name] = newView;

  win.addBrowserView(newView);
}

module.exports = { createWindow, getBrowserViewsMap };
