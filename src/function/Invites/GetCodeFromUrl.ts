/**
 * 
 * @param url the url of the discord invite
 * @returns The invite cord
 */

export async function getCodeFromUrl(url: string) {
    url = url.split('discord.com/').join('');
    url = url.split('discord.gg/').join('');
    url = url.split('invite/').join('');
    url = url.split('discordapp.com/').join('');
    url = url.split('https://').join('');
    url = url.split('http://').join('');

    return url;
}