import { app, BrowserWindow, ipcMain } from "electron";

let onlineStatusWindow: BrowserWindow

app.on('ready', () => {
  onlineStatusWindow = new BrowserWindow({ title: 'Is Jell\'s blog alive?', width: 800, height: 600, show: true})
  onlineStatusWindow.loadURL(`file://${process.cwd()}/src/online-status.html`)
})

// ipcMain.on('online-status-changed', (event: any, status: any) => {
//   window.alert(`${typeof event}, ${typeof status}`)
//   console.log(status)
// })
