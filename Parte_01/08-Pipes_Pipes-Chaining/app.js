const fs = require('fs');

const readStream = fs.createReadStream('./exemplo.txt', 'utf8');
const writeStream = fs.createWriteStream('./exemplo2.txt.gz');

//isso aqui então faz a mesma coisa que o módulo anterior, mais resumido.
// readStream.pipe(writeStream);

//==============================
const zlib = require('zlib');
const gzip = zlib.createGzip();

// serve tanto pra unzip, que desfaz a compressão
const gunzip = zlib.createGunzip();

//aqui então vai usar a zlib e vai comprimir em zip/winrar format.
//só precisar ter o formato 'gz'
readStream.pipe(gzip).pipe(writeStream);