const path = require('path')

const filename1 = './data1.json'
const filePathObj = path.parse(filename1)

console.log(filePathObj);

const filePathResolved = path.resolve(filename1)

console.log(filePathResolved);

const filePathRel = path.relative('./', filename1)

console.log(filePathRel);

const filePathNormal = path.normalize(filename1)

console.log(filePathNormal);