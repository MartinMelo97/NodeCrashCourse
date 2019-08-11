const EventEmmiter = require('events')

// Create class
class MyEmmiter extends EventEmmiter {
}

// Init object
const myEmmiter = new MyEmmiter()

//Event listener
myEmmiter.on('event', () => console.log('Event Fired'))

// init event
myEmmiter.emit('event')