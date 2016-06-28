//#1
// console.log("HELLO WORLD");


//#2
// var sum = 0;
// var cArgs = process.argv.length;
// for (i=2; i<cArgs; i++) {
// 	sum += Number(process.argv[i]);
// }
// console.log(sum);


//#3
// var file = process.argv[2];
// var fs = require('fs');
// var buf = null;
// var nLines = null;
// try {
//     buf = fs.readFileSync(file, 'utf-8');
// 	var buffStr = buf.toString();
// 	var linesArr = buffStr.split('\n');
// 	nLines = linesArr.length -1;
// 	console.log(nLines);
// }
// catch (e) {
// 	console.log(e);
// }


//#4
// var fs = require('fs');
// var fileName = process.argv[2];

// fs.readFile(fileName, 'utf-8', function (err, data) {
// 	if (err) {
// 		throw err;
// 	}
// 	else {
// 		var nLines = data.toString().split('\n').length -1 ;
// 		console.log(nLines);
// 	}
// });