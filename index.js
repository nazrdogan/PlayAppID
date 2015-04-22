var jxm = require('jxm');
var express = require('express');
var readline = require('readline');
var request = require("request");
var rl = readline.createInterface(process.stdin, process.stdout);
console.log("Please  Enter app  id:")
rl.setPrompt('nazir> ');
rl.prompt();
rl.on('line', function(line) {

  switch(line.trim()) {
    case 'exit':
      process.exit(0);
      break;
    default:
      request("https://play.google.com/store/apps/details?id="+line.trim(), function(error, response, body) {
          var res=JSON.stringify(response.statusCode);


          if(res==='200'){
            console.log("Application exits on Google Play");
            rl.prompt();
          }
          else if(res==='404'){
            console.log("Application does not exits on Google Play");
            rl.prompt();
          }
          else{
            console.log("Please  send this response to me:"+res);
          }
          rl.prompt();
        });
          break;
      }

  rl.prompt();

}).on('close', function() {

  process.exit(0);
});
