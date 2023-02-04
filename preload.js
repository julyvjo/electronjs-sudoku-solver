const { contextBridge } = require('electron')

contextBridge. xposeInMainWorld('versions', {
  node: () => 'node'
})