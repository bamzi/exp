// node argv.js -d <date: 2019-1-30> -w <draw> -p <boolean>

var argv = require('minimist')(process.argv.slice(2), {boolean: 'p'});

const argvInfo = {
    date: argv.d,
    draw: argv.w,
    predict: argv.p
}

console.log(argvInfo);
