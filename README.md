# undici-shim [![Codacy Badge](https://app.codacy.com/project/badge/Grade/22c825427e0a47cb80fffdc59b1684fd)](https://app.codacy.com/gh/Owen3H/undici-shim/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade) ![GitHub repo size](https://img.shields.io/github/repo-size/Owen3H/undici-shim)

### A small ESM/UMD library providing the fast `request` function from [Undici](https://github.com/nodejs/undici) within Node, otherwise `window.fetch` is utilized for use in the browser.

## Why?
Upon trying to distribute a project, I realised Undici was not isomorphic and could not be used on the client-side.<br>
While similar libraries exist, they either don't support CJS or use `fetch` instead of `request` within Node.

## Install
```shell
npm i undici-shim
```

## Usage

### Node
```js
import request from 'undici-shim'

const res = await request('https://jsonplaceholder.typicode.com/posts')
console.log(res.body.json())
```

### Browser
```html
Soon ...
```
