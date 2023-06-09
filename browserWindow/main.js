const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
let win1,win2,win3;
let parentWindow, childWindow;
function createWindow() {
    // win1 = new BrowserWindow();
    // win1.loadURL(url.format(
    //     {
    //         pathname: path.join(__dirname, 'one.html'),
    //         protocol: 'file',
    //         slashes: true
    //     }
    // ));
    // win1.on('closed', () => {
    //     win1 = null;
    // })
    // win1.webContents.openDevTools();
    // win2 = new BrowserWindow({
    //     backgroundColor: '#2e2c29',
    //     width:  400,
    //     height: 400,
    //     maxWidth: 500,
    //     maxHeight: 500,
    //     frame: false
    // });
    // win2.loadURL(url.format(
    //     {
    //         pathname: path.join(__dirname, 'two.html'),
    //         protocol: 'file',
    //         slashes: true
    //     }
    // ));
    // win2.on('closed', () => {
    //     win2 = null;
    // })
    // // win2.webContents.openDevTools();

    // win3 = new BrowserWindow();
    // win3.loadURL('https://www.github.com/');

    parentWindow = new BrowserWindow({
        title: 'Parent Window'
    });
    childWindow = new BrowserWindow({
        show: false,
        parent: parentWindow,
        title: 'Child Window',
        modal: true // Disables Parent Window
    });
    childWindow.loadURL('https://www.facebook.com');
    childWindow.once('ready-to-show',()=>{
        childWindow.show()
    })
}
app.on('ready', createWindow);
// app.on('window-all-closed',() => {
//     if(win1 == null){
//         createWindow();
//     }
// });