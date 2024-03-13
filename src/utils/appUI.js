const {
  BrowserWindow,
  app,
  ipcMain,
  Notification,
  BrowserView,
  screen,
} = require("electron");
// const db = require("./../dbo/models");
const path = require("path");
const { checkAuth, createBrowserView }  = require("./utils");

// const endpoints = require("./../react/utils/endpoints");

function createWindow() {
  const screenWidth = screen.getPrimaryDisplay().size["width"];
  const screenHeight = screen.getPrimaryDisplay().size["height"];
  let topHeight = 35;
  let leftWidth = 250;
  let rightWidth = 50;

  const staticLinks = [
    
    {
      urlPath: "https://www.google.com",
      x: leftWidth,
      y: topHeight,
      w: screenWidth - leftWidth - rightWidth,
      h: screenHeight - topHeight,
      name: "google",
    },
    {
      urlPath: "https://mail.google.com",
      x: leftWidth,
      y: topHeight,
      w: screenWidth - leftWidth - rightWidth,
      h: screenHeight - topHeight,
      name: "gmail",
    },
    {
      urlPath: "https://www.facebook.com",
      x: leftWidth,
      y: topHeight,
      w: screenWidth - leftWidth - rightWidth,
      h: screenHeight - topHeight,
      name: "facebook",
    },
    {
      urlPath: "https://www.youtube.com",
      x: leftWidth,
      y: topHeight,
      w: screenWidth - leftWidth - rightWidth,
      h: screenHeight - topHeight,
      name: "youtube",
    },
    {
      urlPath: "https://web.whatsapp.com",
      x: leftWidth,
      y: topHeight,
      w: screenWidth - leftWidth - rightWidth,
      h: screenHeight - topHeight,
      name: "whatsapp",
    },
  ];

  const UIViews = [
    {
      htmlPath: "pages/topBar.html",
      x: 0,
      y: 0,
      w: screenWidth,
      h: topHeight,
      name: "topBar",
    },
    {
      htmlPath: "pages/leftSidebar.html",
      x: 0,
      y: topHeight,
      w: leftWidth,
      h: screenHeight - topHeight,
      name: "leftSidebar",
    },
    {
      htmlPath: "pages/rightSidebar.html",
      x: screenWidth - rightWidth,
      y: topHeight,
      w: rightWidth,
      h: screenHeight - topHeight,
      name: "rightSidebar",
    },
    {
      htmlPath: "pages/cuiWindow.html",
      x: leftWidth,
      y: topHeight,
      w: screenWidth - leftWidth - rightWidth,
      h: screenHeight - topHeight,
      name: "cuiWindow",
    },
    {
        htmlPath: "./pages/organigram.html",
        x: leftWidth,
        y: topHeight,
        w: screenWidth - leftWidth - rightWidth,
        h: screenHeight - topHeight,
        name: "testPage",
      }
  ];

  const AuthView = {
    htmlPath: "pages/auth.html",
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
  // for (let view of staticLinks) {
  //   createBrowserView(win, view);
  //   // console.log(view);
  // }
  // for (let view of UIViews) {
  //   createBrowserView(win, view);
  //   // console.log(view);
  // }

  // checkAuth(win, AuthView);
 
  // console.log("jkashgdfjhasgdfkjhagsdfjkhasdgkfjh", authToken)

  // createBrowserView(win, AuthView);
  // create
  win.maximize();
  // win.webContents.openDevTools();
  return win;
}


module.exports = { createWindow };
