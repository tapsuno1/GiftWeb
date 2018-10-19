var spawn = require("child_process").spawn,child;
var StringDecoder = require('string_decoder').StringDecoder;

var cookiesString= '';
var decoder = new StringDecoder('utf8');

async function add2CookiesString (result) {
  cookiesString += result;
  // console.log(cookiesString);

}

async function getCookieFromChrome(cookieName, callback) {
  var result = `${cookieName} = `;
  child = spawn("powershell.exe",[`./cookieScript.ps1 \"${cookieName}\"`]);
  //child = spawn("powershell.exe",["./cookieScript1.ps1"]);
  child.stdout.on("data",function(data){
    var cookie =  decoder.write(data);

    if(cookie.length > 2){
      result += cookie;
    }
  });
  child.stderr.on("data",function(data){
      console.log('' +data);
  });
  child.on("exit",function(){
      result = result.trim();
      result += '; ';
      callback(result);
      //console.log("Powershell Script finished");
  });
  child.stdin.end(); //end input
}

getCookieFromChrome('session-id', add2CookiesString);
getCookieFromChrome('session-id-time', add2CookiesString);
getCookieFromChrome('ubid-main', add2CookiesString);
getCookieFromChrome('session-token', add2CookiesString);
getCookieFromChrome('x-main', add2CookiesString);
getCookieFromChrome('at-main', add2CookiesString);
getCookieFromChrome('sess-at-main', add2CookiesString);
getCookieFromChrome('sst-main', add2CookiesString);
getCookieFromChrome('csm-hit', add2CookiesString);
getCookieFromChrome('x-wl-uid', add2CookiesString);

async function init(){
   // await sleep(5000)
   while(cookiesString.split(";").length != 11){
     await sleep(1000)
   }

   console.log('init run');
   console.log(cookiesString);
   console.log(cookiesString.split(";").length);
}
function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

 init();
//while(cookiesString.split(";").length > 8 ){
// while(true){
//   await sleep(1000);
//     console.log(cookiesString);
//     console.log(cookiesString.split(";").length);
//
// }
