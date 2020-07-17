var fs = require('fs');

var readStream = fs.createReadStream('in.txt');
var writeStream = fs.createWriteStream('out.txt');

readStream.pipe(writeStream);

