const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: false
    }
  });

  // 开发环境
  win.loadURL('http://localhost:3000');

  // 生产环境
  win.loadFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));

  win.webContents.on('did-finish-load', () => {
    console.log('页面加载完成');
  });
  
  win.webContents.on('dom-ready', () => {
    console.log('DOM 已加载');
  });
  
  win.webContents.on('console-message', (event, level, message, line, sourceId) => {
    console.log(`控制台信息: ${message}`);
  });

  win.webContents.openDevTools();  // 添加这一行代码
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});