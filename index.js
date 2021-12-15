// path tests 

const path = require('path')
const os = require('os')

const filename1 = './data1.json'
const filePathObj = path.parse(filename1)

console.log(filePathObj);

const filePathResolved = path.resolve(filename1)

console.log(filePathResolved);

const filePathRel = path.relative('./', filename1)

console.log(filePathRel);

const filePathNormal = path.normalize(filename1)

console.log(filePathNormal);

// os tests 

console.log(os.arch());
console.log(os.cpus());
console.log(os.endianness());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());
