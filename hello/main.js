const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
let win;
function createWindow() {
    win = new BrowserWindow();
    win.loadURL(url.format(
        {
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true
        }
    ));
    win.on('closed', () => {
        win = null;
    })
    win.webContents.openDevTools();
}
app.on('ready', createWindow);
app.on('window-all-closed',() => {
    if(win == null){
        createWindow();
    }
});