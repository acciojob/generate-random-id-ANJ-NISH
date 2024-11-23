function makeid(l) {

	let str='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';

	let newstr="";
	for(let i=0;i<l;i++)
		{
			let x=Math.floor(Math.random()*61)+1;

			let ch=str.charAt(x);
			newstr+=ch;
		}

	return newstr;
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
