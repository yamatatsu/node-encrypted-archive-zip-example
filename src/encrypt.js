const fs = require('fs');
const archiver = require('archiver');

archiver.registerFormat('zip-encrypted', require("archiver-zip-encrypted"));

exports.encrypt =  async function encrypt({ content, filename, outputPath, password }) {
  const output = fs.createWriteStream(`${__dirname}/${outputPath}`);

  const archive = archiver.create('zip-encrypted', {
    zlib: { level: 8 }, 
    encryptionMethod: 'aes256', 
    password,
  });
  archive.pipe(output);

  archive.append(Buffer.from(content), { name: filename });

  await archive.finalize();
}
