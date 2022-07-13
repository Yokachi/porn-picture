const test = require('./index')

async function getImage() {
    let random = await test.nsfw.random()
    let thighs = await test.nsfw.thighs()
    let ass = await test.nsfw.ass()
    let panties = await test.nsfw.panties()
    let cosplay = await test.nsfw.cosplay()
    let pussy = await test.nsfw.pussy()
    let teen = await test.nsfw.teen()
    let catGirl = await test.nsfw.catGirl()
    let rule34 = await test.hentai.rule34()
    let hentai = await test.hentai.random()
    console.log(random,thighs,ass,panties,cosplay,pussy,teen,catGirl,rule34,hentai)
}

getImage()