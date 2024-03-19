
const { ipcRenderer, contextBridge } = require('electron');
const db = require('./../dbo/models');

contextBridge.exposeInMainWorld('api', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  printTest(message) { ipcRenderer.send('printTest', message); },
  nodify: {
    send(message) { ipcRenderer.send('notify', message); }
  },
  db: {
    getToken: async () => { let token = await db.authToken.findOne(); return token; },
    setToken(data) { ipcRenderer.send('setToken', data); },
    getOpenTabs: async () => { let tabs = await db.openTabs.findAll(); return tabs; },
  },
  setMainWindow: (url) => { ipcRenderer.send('setMainWindow', url); },






  topWindow:{
    setTopView(name){ipcRenderer.send('topView',name);}
  },
  setURL: {
    sendURL(url) { ipcRenderer.send('newURL', url); },
    sendWhatsapp() { ipcRenderer.send('whatsappURL', "https://web.whatsapp.com"); }
  },
});


// send: (channel, data) => {
//   // Whitelist channels
//   let validChannels = ['toMain'];
//   if (validChannels.includes(channel)) {
//     ipcRenderer.send(channel, data);
//   }
// },
// receive: (channel, func) => {
//   let validChannels = ['fromMain'];
//   if (validChannels.includes(channel)) {
//     // Deliberately strip event as it includes `sender`
//     ipcRenderer.on(channel, (event, ...args) => func(...args));
//   }
// },
// contextBridge.exposeInMainWorld('electron', {
// notificationApi: {
//   sendNotification(message) {
//     ipcRenderer.send('notify', message);
//   }
// },
// setURL: {
//   sendURL(url) {
//     ipcRenderer.send('newURL', url);
//   },
//   sendWhatsapp() {
//     ipcRenderer.send('whatsappURL', "https://web.whatsapp.com");
//   }
// },
// login: {
//   setAuthTokens(data) {
//     ipcRenderer.send('setAuthToken', data);
//   },
// getAuthTokens() {
//   ipcRenderer.invoke('getAuthToken').then((result) => {
//     console.log(result);
//     return result;
//   });
// },
// test: async () => ipcRenderer.invoke('testToken').then((result) => {
//   console.log(result);
//   return result;
// }),
// print(message) {
//   ipcRenderer.send('print', message);
// },
// }
// });