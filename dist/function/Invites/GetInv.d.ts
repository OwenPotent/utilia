/**
 *
 * @param inviteCode Invite code from the discord invite url
 * @param size used for server icon size (Default is 64)
 * @param withCounts Default to true
 * @returns A json output of the code given
 */
export declare function getInv(inviteCode: string, size?: number, withCounts?: boolean): Promise<void>;
