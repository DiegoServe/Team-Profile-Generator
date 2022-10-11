const fs = require('fs');


//Function to Write HTML File
function writePage (html) {
    fs.writeFile('./dist/index.html', html, err =>{
        if(err){
            throw err
        }
        console.log("index.html Page generated")
        copyCSS()
    })
}

module.exports = writePage