# undici-shim [![Codacy Badge](https://app.codacy.com/project/badge/Grade/22c825427e0a47cb80fffdc59b1684fd)](https://app.codacy.com/gh/Owen3H/undici-shim/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade) ![GitHub repo size](https://img.shields.io/github/repo-size/Owen3H/undici-shim)

### A small ESM/UMD library providing the fast `request` function from [Undici](https://github.com/nodejs/undici) within Node, otherwise `window.fetch` is utilized when running in a browser environment.

## Why?
Upon trying to distribute a project, I found Undici could not be used on the client-side.<br>
As such, this is a drop-in replacement for Undici when using bundlers like webpack/rollup.<br>

Without the overhead of WHATWG Streams, the [request](https://undici.nodejs.org/#/?id=undicirequesturl-options-promise) method proves much faster than fetch in both latency and throughput.

|        Tests        | Samples |      Results     | Tolerance | Difference with slowest |
|---------------------|---------|------------------|-----------|-------------------------|
| undici - fetch      |      20 |  1028.31 req/sec |  ± 2.71 % |                       - |
| http - no keepalive |      10 |  3891.51 req/sec |  ± 2.00 % |              + 278.44 % |
| undici - pipeline   |      95 |  6034.47 req/sec |  ± 2.95 % |              + 486.83 % |
| http - keepalive    |      50 |  6382.57 req/sec |  ± 2.98 % |              + 520.68 % |
| undici - request    |      15 |  8528.35 req/sec |  ± 2.11 % |              + 729.35 % |

## Install
Bun (Recommended) - `bun add undici-shim`\
PNPM - `pnpm i undici-shim`

## Usage
### ESM
When importing, the `request` method is used by default, though it also works as a named export.
```ts
import request from 'undici-shim'
// or
import { request } from 'undici-shim'
```

Then simply call it asynchronously and return the response as usual. However, methods like `.json()` and `.text()` have been moved to the body instead of the response like the standard `fetch`.
```ts
const res = await request('https://jsonplaceholder.typicode.com/posts/1')
console.log(await res.body.json())
```

For consistency across environments, you can use Undici [fetch](https://undici.nodejs.org/#/?id=undicifetchinput-init-promise) instead.
```ts
import { fetch } from 'undici-shim'

const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
console.log(await res.json())
```

### CommonJS
```js
const { fetch } = require('undici-shim')

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(console.log)
```

## Named Exports
**Node**<br>
Starting from v1.3.2, named exports are identical to Undici.
```js
import { request, Dispatcher, Headers, ... } = from 'undici-shim'
```

**Browser**
```js
import { fetch, Request, Response, Headers } = from 'undici-shim'
```
