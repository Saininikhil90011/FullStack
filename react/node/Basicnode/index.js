Q: 1 //create a dir name myfiles and create files with loop sample1-sample10.txt **
const fs=require('node:fs')
// fs.mkdirSync('myfiles')
const dirName = 'myfiles';
for (let i = 0; i < 10; i++) {
    fs.writeFileSync(`${dirName}/data${i}.txt`, `this is data ${i}`)
}
// fs.writeFileSync('myfiles/data.txt','this is data')