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
    return user.avatarURL({ forceStatic: false }).includes("gif");
}
exports.hasNitro = hasNitro;
