var r1 = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
	});

r1.question('say what? ', function (inp) {console.log(inp); r1.close();});
