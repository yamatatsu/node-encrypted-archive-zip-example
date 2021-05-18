const archiver = require('archiver');

archiver.registerFormat('zip-encrypted', require("archiver-zip-encrypted"));

exports.encrypt = function encrypt({ content, filename, password, writableStream }) {
  const archive = archiver.create('zip-encrypted', {
    zlib: { level: 8 }, 
    encryptionMethod: 'aes256', 
    password,
  });
  archive.pipe(writableStream)

  archive.append(Buffer.from(content), { name: filename });

  return archive.finalize()
}
