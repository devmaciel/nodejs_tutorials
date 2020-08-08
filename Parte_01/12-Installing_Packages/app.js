//==============================
// Node Package Manager 

/*
* Site: npmjs.com, tipo um packagist do php
* ---npm install lodash, foi o que ele instalou.
* 
* vai criar package_json, e json.lock, e junto com as dependencias
* que fica em node_modules.
*
* pra desinstalar as dependencias
* ---npm uninstall <nome_da_dependencia>
*/

//import
const lodash = require('lodash');

//array, string, index_inicial, index_final
let exemplo = lodash.fill([1,2,3,4,5], "String", 1,4);

//[1,"string","string","string",5]
console.log('exemplo');