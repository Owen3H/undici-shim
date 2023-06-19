# undici-shim [![Codacy Badge](https://app.codacy.com/project/badge/Grade/22c825427e0a47cb80fffdc59b1684fd)](https://app.codacy.com/gh/Owen3H/undici-shim/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade) ![GitHub repo size](https://img.shields.io/github/repo-size/Owen3H/undici-shim)

### A small ESM/UMD library providing the fast `request` function from [Undici](https://github.com/nodejs/undici) within Node, otherwise `window.fetch` is utilized for use in the browser.

## Why?
Upon trying to distribute a project, I found Undici was not isomorphic and couldn't be used on the client-side. As such, this is a drop-in replacement for Undici when using bundlers like webpack/rollup.<br>

The [request](https://undici.nodejs.org/#/?id=undicirequesturl-options-promise) method is ~7x faster than fetch.
```

## Install
```bash
npm i undici-shim
```

## Usage
> **Note**
> The 'fetch' import here is actually request under the hood.

```js
import { fetch } from 'undici-shim'

const res = await fetch('https://jsonplaceholder.typicode.com/posts')
console.log(res.body.json())
```