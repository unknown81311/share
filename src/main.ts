import {app, BrowserWindow} from 'electron'

app.on('ready', () => {
  const win = new BrowserWindow({
    transparent: true,
    frame: false,
    backgroundColor: '#00000000',
    hasShadow: true,
    alwaysOnTop: false,
    webPreferences: {
      nodeIntegration: true
    },
    height : 360,
    width : 500
  })
  // win.setResizable(false);
  const
    d = new Date(),
    day = d.getMonth() + '|' + d.getDate();
  win.loadFile(__dirname + `/html/${day=='8|24'||day=='10|25'?'xp/':''}index.html`);
  console.log('initialized')

  win.on('ready-to-show', () => {
    win.show()
    console.log('showing')
  })
})