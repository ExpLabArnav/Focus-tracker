const {app,BrowserWindow}=require('electron');
function make(){const w=new BrowserWindow({width:480,height:860,title:'Focus Tracker',autoHideMenuBar:true});w.loadFile('index.html')}
app.whenReady().then(make);
app.on('window-all-closed',()=>app.quit());
