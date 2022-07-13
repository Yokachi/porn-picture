const handler = require("../handler");
const hub = require('../data').hub
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


class RealShit {
    async random() {
        const int = getRandomInt(2)
        if(int === 0){
            let subreddits = ["girlsinyogapants", "Thighs", "thighhighs", "ThickThighs", "UnderwearGW", "datgap", "leggingsgonewild", "pawg", "hipcleavage", "legs", "pantyhose", "ass", 
            "paag", "asstastic", "buttplug", "whooties", "AssholeBehindThong", "Frogbutt", "rearpussy", "CuteLittleButts", "HungryButts", "reversecowgirl", "facedownassup", 
            "butt", "butts", "pawg", "bigasses", "cosplaybutts", "BubbleButts", "assinthong", "smalltitsbigass", "CelebrityButts", "booty", "panties", "FullBackPanties", "PantiesToTheSide",
            "thongs", "xsmallgirls", "PublicSexPorn", "cameltoe", "smallboobs", "LegalTeens", "TooCuteForPorn", "adorableporn", "AsiansGoneWild", "trashyboners", "StraightGirlsPlaying", 
            "LipsThatGrip", "spreadeagle", "dirtysmall", "nsfw", "pussy", "gonewild", "SexyTummies", "SpreadEm", "Ahegao_IRL", "nsfwcosplay", "RealGirls", "lesbians", "Fingering", "AnalGW",
            "anal", "freeuse", "BorednIgnored", "grool", "jilling", "porn", "Amateur", "TinyTits", "PetiteGoneWild", "cumsluts", "AsianHotties", "simps", "slimgirls", "ginger", "palegirls", 
            "BustyPetite", "Innie","HappyEmbarrassedGirls","NSFW_Snapchat","JuicyOnlyfans"];
            return await handler.Request("reddit", subreddits);
        }else if(int === 1){
            return await this.nsfwxxx()
        }else if(int === 2){
            return hub()[getRandomInt(hub().length)]
        }
    }
    async thighs() {
        let subreddits = ["girlsinyogapants", "Thighs", "thighhighs", "ThickThighs", "UnderwearGW", "datgap", "leggingsgonewild", "pawg", "hipcleavage", "legs", "pantyhose","Boobies","BustyPetite","HappyEmbarrassedGirls","TittyDrop","boobs","boob","boobbounce","TinyTits"];
        return await handler.Request("reddit", subreddits);
    }
    async ass() {
        let subreddits = ["ass", "paag", "asstastic", "buttplug", "whooties", "AssholeBehindThong", "Frogbutt", "rearpussy", "CuteLittleButts", "HungryButts", "reversecowgirl",
        "facedownassup", "butt", "butts", "pawg", "bigasses", "cosplaybutts", "girlsinyogapants", "BubbleButts", "assinthong", "smalltitsbigass", "CelebrityButts", "booty"];
        return await handler.Request("reddit", subreddits);
    }
    async panties() {
        let subreddits = ["panties", "FullBackPanties", "AssholeBehindThong", "assinthong", "PantiesToTheSide", "thongs", "UnderwearGW"];
        return await handler.Request("reddit", subreddits);
    }
    async cosplay() {
        let subreddits = ["nsfwcosplay","cosplaybabes","CosPlayPorn","RealAhegao","hinatacosplay","CosplayBoobs"]
        return await handler.Request("reddit", subreddits)
    }
    async pussy() {
        let subreddits = ["pussy","GodPussy","rearpussy","Ratemypussy","Eating_Pussy_GIFs","vagina"]
        return await handler.Request("reddit", subreddits)
    }
    async teen() {
        let subreddits = ["LegalTeens"]
        return await handler.Request("reddit",subreddits)
    }
    async catGirl() {
        let subreddits = ["cat_girls"]
        return await handler.Request("reddit",subreddits)
    }
    async nsfwxxx() {
        let users = ["vlad_o_chka_","Aggravating_Movie_47","Burberryweather","rachelxxxsnap","pussycass","Telari_Love","incognito","Garci92","Weltshmertz","Rellmac23","ass-complex","MoistPurple6075","mali_baker120","sunflowersecretsx","_Ritsu_","haysebeyse41","FabulousHorror","mister_checkers","Cherryoka","Dadbodtothemax","xxxtinababy","waggishvariation","asianvixen69","RileyRidesReece","Scaryy-Love"]
        return await handler.Request("nsfwxxx",users)
    }
}
module.exports = new RealShit();