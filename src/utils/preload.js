
const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    send: (channel, data) => {
        // Whitelist channels
        let validChannels = ['toMain'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    receive: (channel, func) => {
        let validChannels = ['fromMain'];
        if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender`
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    },
});
contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    }
  },
  setURL:{
    sendURL(url){
      ipcRenderer.send('newURL',url);
    },
    sendWhatsapp(){
      ipcRenderer.send('whatsappURL',"https://web.whatsapp.com");
    }
  },
  login:{
    setAuthTokens(data){
      ipcRenderer.send('setAuthToken',data);
    },
    getAuthTokens() {
      ipcRenderer.invoke('getAuthToken').then((result) => {
        console.log(result);
        return result;
      });
    },
    test:async ()=>ipcRenderer.invoke('testToken').then((result) => {
      console.log(result);
      return result;
    }),
    print(message){
      ipcRenderer.send('print',message);
    },
    node: () => process.versions.node,
  }
});