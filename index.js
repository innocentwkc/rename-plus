const fs = require('fs')

// Read directory
fs.readdir('./', (err, files) => {
  for (const file of files) {
    let newFile = `${files.indexOf(file) + 1}.trc`
    // if (/[A-Z]/g.test(file)) {
    if (file !== 'rename.js') {
      // Add more logic to rename file
      fs.rename(file, newFile, (err) => {
        console.log('Renaming', file, 'to', newFile)
        if (err) throw err
      })
    }
  }
})
