const url = require('url')

const myurl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

// Serializer URL
console.log(myurl.href) // http://mywebsite.com:8000/hello.html?id=100&status=active
console.log(myurl.toString()) // http://mywebsite.com:8000/hello.html?id=100&status=active

// Host (root domain)
console.log(myurl.host) //mywebsite.com:8000

// Hostname does not get port
console.log(myurl.hostname) // mywebsite.com

//Pathname
console.log(myurl.pathname) // /hello.html

//Serializer query
console.log(myurl.search) // id=100&status=active

//Params object
console.log(myurl.searchParams)

//Add params
myurl.searchParams.append('abc', '123')
console.log(myurl.searchParams)

// Loop through params
myurl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))