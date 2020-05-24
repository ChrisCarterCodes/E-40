var determine = require('./bot').determine

process.env.E40_PORT = 5000
var server = require('./server')

~function(){
    console.log(determine("Y'all still be poppin' y'all collars?"))
    console.log(determine('hello?'))
    console.log(determine('world?'))
    console.log(determine('check?'))
    console.log(determine('check check?'))
    console.log(determine('ignore this, bot'))
    console.log(determine("star wars?"))
    console.log(determine('yoda?'))
}()