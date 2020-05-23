var determine = require('./bot').determine

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