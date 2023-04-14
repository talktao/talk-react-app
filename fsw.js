const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');

const fontsList = fs.readdirSync(path.join(__dirname, 'src/global/fonts')).filter(i => i.match(/ttf|eot|svg|woff/)).map(i => {
    const [name] = i.split('.');
    return name;
});


const allSpider = fontsList.map(name => {
    return exec(`node ./node_modules/font-spider-walker-strengthen/bin/index --fontPath ./src/global/fonts --fontName ${name} --filetypes txt`).then(std => {
        console.log(`${name} fswing`)
    });
});


Promise.all(allSpider).then((stdout, stderr) => {
    // console.log(stdout)
    // console.log(stderr)
});
