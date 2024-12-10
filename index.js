const fs = require('fs');
fs.readFile('./bak4.html', 'utf8', (err, data) => {
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

const time =getCurrentDateTime()

    fs.writeFileSync(`./output/${time}-有行业.vm`, res)
    res = res.replace(/<!-- 行业权限 -->[\s\S]*?<!-- 行业权限 -->/, '');

    fs.writeFileSync(`./output/${time}-无行业.vm`, res)
})

function getCurrentDateTime() {
    // 创建一个 Date 对象
    const now = new Date();
  
    // 获取年、月、日、时、分、秒
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // getMonth() 返回的月份是从 0 开始的，所以需要加 1
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // 格式化输出
    const formattedDate = `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`;
    const formattedTime = `${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}${seconds.toString().padStart(2, '0')}`;
  
    return `${formattedDate}${formattedTime}`;
  }

 