"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
/**
 * The ChannelCreator class provides methods to create, delete, rename, and move channels in a Discord guild.
 */
class ChannelCreator {
    client;
    /**
     * Creates an instance of ChannelCreator.
     * @param {Client} client - The Discord client instance.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Creates a text channel in the specified guild.
     * @param {Guild} guild - The guild where the channel will be created.
     * @param {string} name - The name of the channel.
     * @returns {Promise<TextChannel>} - A promise that resolves with the created text channel.
     */
    async createTextChannel(guild, name) {
        const channel = await guild.channels.create({
            name,
            type: discord_js_1.ChannelType.GuildText
        });
        return channel;
    }
    /**
     * Creates a voice channel in the specified guild.
     * @param {Guild} guild - The guild where the channel will be created.
     * @param {string} name - The name of the channel.
     * @returns {Promise<VoiceChannel>} - A promise that resolves with the created voice channel.
     */
    async createVoiceChannel(guild, name) {
        const channel = await guild.channels.create({
            name,
            type: discord_js_1.ChannelType.GuildVoice
        });
        return channel;
    }
    /**
     * Creates a category channel in the specified guild.
     * @param {Guild} guild - The guild where the channel will be created.
     * @param {string} name - The name of the channel.
     * @returns {Promise<CategoryChannel>} - A promise that resolves with the created category channel.
     */
    async createCategoryChannel(guild, name) {
        const channel = await guild.channels.create({
            name,
            type: discord_js_1.ChannelType.GuildCategory
        });
        return channel;
    }
    /**
     * Deletes the specified channel.
     * @param {TextChannel | VoiceChannel | CategoryChannel} channel - The channel to be deleted.
     * @returns {Promise<void>} - A promise that resolves when the channel is deleted.
     */
    async deleteChannel(channel) {
        await channel.delete();
    }
    /**
     * Renames the specified channel.
     * @param {TextChannel | VoiceChannel | CategoryChannel} channel - The channel to be renamed.
     * @param {string} newName - The new name for the channel.
     * @returns {Promise<void>} - A promise that resolves when the channel is renamed.
     */
    async renameChannel(channel, newName) {
        await channel.setName(newName);
    }
    /**
     * Moves the specified channel to a new parent category.
     * @param {TextChannel | VoiceChannel | CategoryChannel} channel - The channel to be moved.
     * @param {CategoryChannel} newParent - The new parent category for the channel.
     * @returns {Promise<void>} - A promise that resolves when the channel is moved.
     */
    async moveChannel(channel, newParent) {
        await channel.setParent(newParent);
    }
}
exports.default = ChannelCreator;
