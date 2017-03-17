var colors = require('colors');
var moment = require('moment');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

var print = (message1, message2) => {
    message1 = message1 ? message1 : '';
    message2 = message2 ? message2 : '';
    var timeStamp = moment().format('HH:mm:ss');
    console.log('[' + timeStamp.input.bold + '] ' + message1.toString().help.bold + ' ' + message2.toString().underline.warn.bold);
};

module.exports = {
    print: print
};