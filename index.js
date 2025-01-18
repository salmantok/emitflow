import emitflow from './demo2.js'

// Menambahkan listener
emitflow.on('greet', (name) => console.log(`Hello, ${name}!`))
emitflow.emit('greet', 'Alice') // Output: Hello, Alice!

// Listener sekali panggil
emitflow.once('welcome', (name) => console.log(`Welcome, ${name}!`))
emitflow.emit('welcome', 'Bob') // Output: Welcome, Bob!
emitflow.emit('welcome', 'Charlie') // Tidak ada output

// Menghapus listener
const farewell = (name) => console.log(`Goodbye, ${name}!`)
emitflow.on('farewell', farewell)
emitflow.emit('farewell', 'Alice') // Output: Goodbye, Alice!
emitflow.off('farewell', farewell)
emitflow.emit('farewell', 'Alice') // Tidak ada output
