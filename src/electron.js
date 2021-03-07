const { app, BrowserWindow } = require('electron');

function createWindow() {

    const window = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.loadURL('http://localhost:3000')
}

app.on('ready', createWindow);


app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) createWindow();
})

app.on('window-all-closed', function () {

    if (process.platform !== 'darwin') app.quit();
});
