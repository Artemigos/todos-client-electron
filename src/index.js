import { app, BrowserWindow } from 'electron';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#171717'
    });

    mainWindow.setMenu(null);
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => { mainWindow = null; });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
