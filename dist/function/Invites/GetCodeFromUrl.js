"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCodeFromUrl(url) {
    url = url.split('discord.com/').join('');
    url = url.split('discord.gg/').join('');
    url = url.split('invite/').join('');
    url = url.split('discordapp.com/').join('');
    url = url.split('https://').join('');
    url = url.split('http://').join('');
    return url;
}
exports.default = getCodeFromUrl;
