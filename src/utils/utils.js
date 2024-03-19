const { BrowserView, screen } = require("electron");
const endpoints = require("../react/utils/endpoints");
const db = require("../dbo/models");
const path = require("path");

// const screenWidth = screen.getPrimaryDisplay().size["width"];
// const screenHeight = screen.getPrimaryDisplay().size["height"];
// let topHeight = 35;
// let leftWidth = 250;
// let rightWidth = 50;

const browserViewsMap = {
  appWindow: {},
  mainView: {},
};

function getBrowserViewsMap() {
  return browserViewsMap;
}

function checkAuth(win, AuthView) {
  db.authToken.findOne().then((result) => {
    if (result === null) {
      createBrowserView(win, AuthView);
    } else {
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
          if (data && data.access) {
            db.authToken
              .findOne()
              .then((result) => {
                db.authToken.destroy({ where: {} });
              })
              .then(() => {
                db.authToken.create({
                  access: data.access,
                  refresh: data.refresh,
                });
              });
          } else {
            createBrowserView(win, AuthView);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
}

function createBrowserHtmlView(win, view) {
  let newView = new BrowserView({
    webPreferences: {
      nodeIntegration: true,
      // worldSafeExecuteJavaScript: false,
      contextIsolation: true,
      // experimentalFeatures: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  // console.log(__dirname, "./preload.js");
  newView.setBounds({ x: view.x, y: view.y, width: view.w, height: view.h });
  // newView.setBackgroundColor("rgba(255, 255, 255, 0)");
  newView.webContents.loadFile(view.htmlPath);
  newView.setBackgroundColor("rgba(17, 24, 39, 0)");
  win.addBrowserView(newView);
  return newView;
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
  // console.log(__dirname, "./preload.js");
  newView.setBounds({ x: view.x, y: view.y, width: view.w, height: view.h });
  // newView.setBackgroundColor("rgba(255, 255, 255, 0)");
  // if (view.urlPath.includes("whatsapp")) {
  //   newView.setBackgroundColor("rgba(249, 250, 251, 1)");
  //   newView.webContents.loadURL(view.urlPath, {
  //     userAgent:
  //       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  //   });
  // } else {
    newView.setBackgroundColor("rgba(249, 250, 251, 1)");
    newView.webContents.loadURL(view.urlPath, { userAgent: "" });
  // }
  win.addBrowserView(newView);
  return newView;
}

// function createMainView(win, url, isWebstie) {

//   let newView = new BrowserView({
//     webPreferences: {
//       nodeIntegration: true,
//       // worldSafeExecuteJavaScript: false,
//       contextIsolation: true,
//       // experimentalFeatures: true,
//       preload: path.join(__dirname, "preload.js"),
//     },
//   });
//   // console.log(__dirname, "./preload.js");
//   newView.setBounds({ x: leftWidth, y: topHeight, width: screenWidth - leftWidth - rightWidth, height: screenHeight - topHeight });
//   // newView.setBackgroundColor("rgba(255, 255, 255, 0)");
//   if(isWebstie){
//     newView.webContents.loadFile(url);
//     if(view.name === "testPage"){
//       newView.setBackgroundColor('rgba(17, 24, 39, 0)');
//     } else {
//     newView.setBackgroundColor('rgba(17, 24, 39, 1)');
//     }
//   }else{
//     if(url.includes("whatsapp")){
//       newView.setBackgroundColor('rgba(249, 250, 251, 1)');
//       newView.webContents.loadURL(url,{ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36' });
//     } else {
//       newView.setBackgroundColor('rgba(249, 250, 251, 1)');
//       newView.webContents.loadURL(url,{userAgent: ""});
//     }
//   }
//   // browserViewsMap.appWindow[view.name] = newView;
//   // win.addBrowserView(newView);
// }

module.exports = { checkAuth, createBrowserView, getBrowserViewsMap, createBrowserHtmlView };
