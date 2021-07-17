"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasNitro = void 0;
/**
 * Checks if the user provided has nitro
 *
 *
 * @param user user you wish to check
 */
function hasNitro(user) {
    if (!user)
        throw new Error("Utilia: No user provided!");
    if (user.bot)
        return false;
    if (user.avatar && user.avatar.startsWith("a_"))
        return true;
    if (user.flags && (user.flags.has("PARTNERED_SERVER_OWNER") || user.flags.has("DISCORD_EMPLOYEE")))
        return true;
    if (user.presence.activities[0] && user.presence.activities.filter(activity => activity.emoji && activity.emoji.id).length > 0)
        return true;
    const animatedEmojiCheck = /(<a:[^:\s]+:[0-9]>)+/g;
    if (user.lastMessage && (user.lastMessage.createdAt.getMonth() === new Date().getMonth() && user.lastMessage.createdAt.getDate() === new Date().getDate()) && user.lastMessage.content && animatedEmojiCheck.test(user.lastMessage.content))
        return true;
    return false;
}
exports.hasNitro = hasNitro;
