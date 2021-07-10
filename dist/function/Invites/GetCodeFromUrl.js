"use strict";
/**
 *
 * @param url the url of the discord invite
 * @returns The invite cord
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCodeFromUrl = void 0;
function getCodeFromUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        url = url.split('discord.com/').join('');
        url = url.split('discord.gg/').join('');
        url = url.split('invite/').join('');
        url = url.split('discordapp.com/').join('');
        url = url.split('https://').join('');
        url = url.split('http://').join('');
        return url;
    });
}
exports.getCodeFromUrl = getCodeFromUrl;
