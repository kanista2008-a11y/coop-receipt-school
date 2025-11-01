const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('env', {
  // เผื่ออนาคตถ้าต้องส่งค่า config/เวอร์ชันมา renderer
  version: '1.0.0'
});
