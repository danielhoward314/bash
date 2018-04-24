const fs = require('fs');

const cat = (fileName) => {
  fs.readFile(fileName = './bash.js', 'utf8', (err, data) => {
    if (err){
      throw err;
    }
    console.log(fileName);
  })

}
cat();
