const handler = require("../handler");
const request = require('request-promise-native')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
class hentaiShit {
    async random() {
        let subreddits = ["hentai"];
        return handler.Request("reddit", subreddits);
    }
    async rule34() {
        let int = getRandomInt(2)
        if(int == 0){
            let subreddits = ["rule34","Rule34LoL"];
            return await handler.Request("reddit", subreddits);
        }else if(int == 1){
            var tag = ['pussy']
            return handler.Request("r34xxx", [tag])
        }
    }
}
module.exports = new hentaiShit();