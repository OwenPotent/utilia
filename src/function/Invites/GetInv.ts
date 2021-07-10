import centra from "centra"

/**
 * 
 * @param inviteCode Invite code from the discord invite url
 * @param size used for server icon size (Default is 64)
 * @param withCounts Default to true
 * @returns A json output of the code given
 */
export default async function getInv(inviteCode: string, size: number = 64, withCounts: boolean = true): Promise<void> {
    return new Promise(async (resolve, reject) => {
        centra(`https://discord.com/api/v8/invites/${inviteCode}?with_counts=${withCounts}`, 'GET').send().then((result) => {
            if (result.statusCode !== 200) return reject(result.statusCode);

            let answer = JSON.parse(result.body.toString());
            
            answer.url = answer.code ? `https://discord.com/invite/${answer.code}` : null;
            answer.guild.guildName = answer.guild.name ? `${answer.guild.name}` : null
            answer.guild.guildId = answer.guild.id ? `${answer.guild.id}` : null
            answer.guild.iconURL = answer.guild.icon ? `https://cdn.discordapp.com/icons/${answer.guild.id}/${answer.guild.icon}?size=${size}` : null;
            answer.guild.bannerURL = answer.guild.banner ? `https://cdn.discordapp.com/banners/${answer.guild.id}/${answer.guild.banner}?size=${size}` : null;
            answer.guild.splashURL = answer.guild.splash ? `https://cdn.discordapp.com/splashes/${answer.guild.id}/${answer.guild.splash}?size=${size}` : null;
            if (answer.inviter) {
                answer.inviter.tag = `${answer.inviter.username}#${answer.inviter.discriminator}`;
                answer.inviter.avatarURL = answer.inviter.avatar ? `https://cdn.discordapp.com/avatars/${answer.inviter.id}/${answer.inviter.avatar}?size=${size}` : null;
            }

            resolve(answer)
        })
    })
}