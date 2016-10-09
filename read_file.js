var inputFile = process.argv[2]; //input.txt
var fs = require("fs");

fs.readFile(inputFile, function (err, data) {
   if (err) {
      return console.error(err);
   }

   var copiedContent = data.toString();
   console.log(copiedContent);
   });


