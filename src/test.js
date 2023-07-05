import fetch from '../dist/esm/node.js'

const res = await fetch('https://jsonplaceholder.typicode.com/posts')
console.log(await res.body.json())