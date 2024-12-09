const fs = require('fs');
fs.readFile('./bak3.html', 'utf8', (err, data) => {
    if(err){
        console.log('err: ', err);
        return
    }
    let res = data.replace(/<!DOCTYPE html>/g, '');
    res = res.replace(/<html.*?>/, '');
    res = res.replace(/<body>/, '');
    res = res.replace(/<\/body>/, '');
    res = res.replace(/<\/html>/, '');
    res = res.replace(/<head>[\s\S]*?<\/head>/, '')



    res = `<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
${res.trim()}
`

    fs.writeFileSync('./有行业.vm', res)
    res = res.replace(/<!-- 行业权限 -->[\s\S]*?<!-- 行业权限 -->/, '');

    fs.writeFileSync('./无行业.vm', res)
})