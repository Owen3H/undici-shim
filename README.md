# undici-shim [![Codacy Badge](https://app.codacy.com/project/badge/Grade/22c825427e0a47cb80fffdc59b1684fd)](https://app.codacy.com/gh/Owen3H/undici-shim/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade) ![GitHub repo size](https://img.shields.io/github/repo-size/Owen3H/undici-shim)

### A small ESM/UMD library providing the fast `request` function from [Undici](https://github.com/nodejs/undici) within Node, otherwise `window.fetch` is utilized for use in the browser.

## Why?
Upon trying to distribute a project, I found Undici was not isomorphic and couldn't be used on the client-side.<br>
As such, this is a drop-in replacement for Undici when using bundlers like webpack/rollup.<br>

Without the overhead of WHATWG Streams, the [request](https://undici.nodejs.org/#/?id=undicirequesturl-options-promise) method proves much faster than fetch.

|        Tests        | Samples |      Results     | Tolerance | Difference with slowest |
|---------------------|---------|------------------|-----------|-------------------------|
| undici - fetch      |      20 |  1028.31 req/sec |  ± 2.71 % |                       - |
| http - no keepalive |      10 |  3891.51 req/sec |  ± 2.00 % |              + 278.44 % |
| undici - pipeline   |      95 |  6034.47 req/sec |  ± 2.95 % |              + 486.83 % |
| http - keepalive    |      50 |  6382.57 req/sec |  ± 2.98 % |              + 520.68 % |
| undici - request    |      15 |  8528.35 req/sec |  ± 2.11 % |              + 729.35 % |

## Install
```bash
npm i undici-shim
```

## Usage
> **Note**<br>
> The 'fetch' import here is actually request under the hood.

```js
import { fetch } from 'undici-shim'

const res = await fetch('https://jsonplaceholder.typicode.com/posts')
console.log(res.body.json())
```