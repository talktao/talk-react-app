const express = require('express');
const path = require('path');
const app = express();
const globby = require('globby');

const pageModules = globby.sync([path.join(__dirname, 'build') + '/*.html']).map(filePath => {
    let tmp = filePath.match(/build\/(.+)\.html$/g)[0];
    return tmp;
});

app.use(express.static(path.join(__dirname, 'build')));

// 多页应用服务端路由
pageModules.map(i => {
    const [dir, html] = i.split('/');
    const name = html.match(/(.+)\.html/)[1];
    app.get(`/${name}`, function (req, res) {
        res.sendFile(path.join(__dirname, dir, html));
    });
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


console.log('app is running')
app.listen(9000);