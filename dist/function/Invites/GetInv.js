"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const centra_1 = __importDefault(require("centra"));
/**
 *
 * @param inviteCode Invite code from the discord invite url
 * @param size used for server icon size (Default is 64)
 * @param withCounts Default to true
 * @returns A json output of the code given
 */
module.exports = function getInv(inviteCode, size = 64, withCounts = true) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            centra_1.default(`https://discord.com/api/v8/invites/${inviteCode}?with_counts=${withCounts}`, 'GET').send().then((result) => {
                if (result.statusCode !== 200)
                    return reject(result.statusCode);
                let answer = JSON.parse(result.body.toString());
                answer.url = answer.code ? `https://discord.com/invite/${answer.code}` : null;
                answer.guild.guildName = answer.guild.name ? `${answer.guild.name}` : null;
                answer.guild.guildId = answer.guild.id ? `${answer.guild.id}` : null;
                answer.guild.iconURL = answer.guild.icon ? `https://cdn.discordapp.com/icons/${answer.guild.id}/${answer.guild.icon}?size=${size}` : null;
                answer.guild.bannerURL = answer.guild.banner ? `https://cdn.discordapp.com/banners/${answer.guild.id}/${answer.guild.banner}?size=${size}` : null;
                answer.guild.splashURL = answer.guild.splash ? `https://cdn.discordapp.com/splashes/${answer.guild.id}/${answer.guild.splash}?size=${size}` : null;
                if (answer.inviter) {
                    answer.inviter.tag = `${answer.inviter.username}#${answer.inviter.discriminator}`;
                    answer.inviter.avatarURL = answer.inviter.avatar ? `https://cdn.discordapp.com/avatars/${answer.inviter.id}/${answer.inviter.avatar}?size=${size}` : null;
                }
                resolve(answer);
            });
        }));
    });
};
