var fs = require('fs');


fs.readFile('file.txt','utf8',function(error,data){
    console.log(data);
});

var data = "hello world";

fs.writeFile('text.json',data,'utf8',function(error){
      console.log('writeFile completed');
});
