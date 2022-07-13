const fetch = require('node-fetch')
const request = require('request-promise-native')
const DabiImages = require("dabi-images");
const DabiClient = new DabiImages.Client();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function Request(type,redditArray) {
    if(!redditArray) return 'merci de définir une redditArray'
    if(type === "reddit"){
        const links = redditArray[getRandomInt(redditArray.length)]
        const result = await fetch(`https://www.reddit.com/r/${links}.json`);
        res = await result.json();
        if (!res.data) return Request(type,redditArray);
        var url = res.data.children[getRandomInt(res.data.children.length)].data.url
        if(url.split('/').indexOf('comments') > -1) return Request(type,redditArray);
        return url
        if(url.split('/').indexOf('comments')) return
        return url
        // return returne[0]
    }else if(type == "r34xxx"){
        var tag = redditArray
            var tags = tag.join('+')
            const urlImgTab = "https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=1000&pid=".concat(1, "&tags=").concat(tags);
            const body = await request(urlImgTab)
            const body1 = body.split('<post')
            if(body1.length < 3) return 'no résult found'
            const int = getRandomInt(body1.length)
            if(int === 0) return generateRule34Links(tag)
            const body2 = body1[int].split('file_url=')[1].split('parent_id=')[0]
            return body2
    }else if(type == "nsfwxxx"){
        let linkarray = []
        const userArray = redditArray
        const user = userArray[getRandomInt(userArray.length)]
        const url = `https://nsfw.xxx/user/${user}`

        const matches = await DabiClient.custom.do(url, /<img.*?>/gm);
        int = 1
        for(txt of matches){
            const test = txt.split('data-src="')[1]
            const tests = `${test}`
            const test2 = tests.split('"')[0]
            const test3 = test2.split('/')
            if(test3.indexOf('avatars') == -1 && test2 && test2.startsWith('https://')){
                linkarray.push(test2)
            }
        }

        var result = linkarray[getRandomInt(linkarray.length)]

        return result
    }else{
        return 'type inconnue'
    }
}

module.exports = {
    Request: Request,
}