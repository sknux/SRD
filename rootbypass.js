'use strict'

if (Java.available){

	Java.perform(function(){

		try{

		var target = asd

		target.implementation = function () {
		console.log('');
		console.log('[+] Bypassed Root Detection, Enjoy!');

		return false;
		};

		}
		catch(error){
			console.log("[-] An exception occured");
			console.log(String(error.stack));
		}
	});
}
else{

console.log("[-] Java is not available");
}
