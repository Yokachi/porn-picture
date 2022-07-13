# This module

## name allow you to shearch Porn/hentai/r34 content with a symple systeme and a big API

<br>
<br>

## Import module

<br>

```js
const name = require('name')
```

<br>

## Find image
#### all function must be start with await ^^

<br>

```js
const name = require('name')

async function getImage() {
    let random = await name.nsfw.random()
    let thighs = await name.nsfw.thighs()
    let ass = await name.nsfw.ass()
    let panties = await name.nsfw.panties()
    let cosplay = await name.nsfw.cosplay()
    let pussy = await name.nsfw.pussy()
    let teen = await name.nsfw.teen()
    let catGirl = await name.nsfw.catGirl()
    let rule34 = await name.hentai.rule34()
    let hentai = await name.hentai.random()
    console.log(random,thighs,ass,cosplay,pussy,teen,catGirl,rule34,hentai)
}

getImage()
```