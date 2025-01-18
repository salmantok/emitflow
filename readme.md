# emitflow

`emitflow` adalah alat event emitter sederhana berbasis Node.js. Alat ini memudahkan pengelolaan event secara efisien dan ringan.

## Instalasi

```bash
npm install emitflow
```

## Penggunaan

```js
// esm
import { emitflow } from 'emitflow'
// commonjs
const { emitflow } = require('emitflow')

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
```

## API

### `on(event, listener)`

Mendaftarkan sebuah listener untuk event tertentu. Listener akan dipanggil setiap kali event terjadi.

#### Parameter:

- `event` (string): Nama event.
- `listener` (function): Fungsi yang akan dipanggil saat event terjadi.

#### Return Value:

- Instance dari `emitflow` (mendukung chaining).

#### Contoh:

```js
emitflow.on('data', (message) => {
  console.log(`Received: ${message}`)
})
```

### `emit(event, ...args)`

Memanggil semua listener yang terdaftar untuk sebuah event.

#### Parameter:

- `event` (string): Nama event.
- `...args`: Argumen yang akan diteruskan ke listener.

#### Return Value:

- Instance dari `emitflow` (mendukung chaining).

#### Contoh:

```js
emitflow.emit('data', 'Hello, World!') // Output: Received: Hello, World!
```

### `once(event, listener)`

Mendaftarkan sebuah listener yang hanya akan dipanggil sekali.

#### Parameter:

- `event` (string): Nama event.
- `listener` (function): Fungsi yang akan dipanggil saat event terjadi.

#### Return Value:

- Instance dari `emitflow` (mendukung chaining).

#### Contoh:

```js
emitflow.once('connect', () => {
  console.log('Connected!')
})

emitflow.emit('connect') // Output: Connected!
emitflow.emit('connect') // Tidak ada output
```

### `off(event, listener)`

Menghapus listener spesifik untuk sebuah event.

#### Parameter:

- `event` (string): Nama event.
- `listener` (function): Listener yang akan dihapus.

#### Return Value:

- Instance dari `emitflow` (mendukung chaining).

#### Contoh:

```js
const handler = (msg) => console.log(`Message: ${msg}`)
emitflow.on('message', handler)

emitflow.emit('message', 'Test') // Output: Message: Test
emitflow.off('message', handler)
emitflow.emit('message', 'Test') // Tidak ada output
```

### `offAll(event)`

Menghapus semua listener yang terdaftar untuk sebuah event.

#### Parameter:

- `event` (string): Nama event.

#### Return Value:

- Instance dari `emitflow` (mendukung chaining).

#### Contoh:

```js
emitflow.on('data', () => console.log('Listener 1'))
emitflow.on('data', () => console.log('Listener 2'))

emitflow.emit('data') // Output: Listener 1, Listener 2
emitflow.offAll('data')
emitflow.emit('data') // Tidak ada output
```

## Donasi

[Ko-fi](https://ko-fi.com/salmantok)

## Lisensi

[MIT](LICENSE)
