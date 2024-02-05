import { Client, Guild, TextChannel, VoiceChannel, CategoryChannel, ChannelType } from 'discord.js';

/**
 * The ChannelCreator class provides methods to create, delete, rename, and move channels in a Discord guild.
 */
export class ChannelCreator {
    private client: Client;

    /**
     * Creates an instance of ChannelCreator.
     * @param {Client} client - The Discord client instance.
     */
    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Creates a text channel in the specified guild.
     * @param {Guild} guild - The guild where the channel will be created.
     * @param {string} name - The name of the channel.
     * @returns {Promise<TextChannel>} - A promise that resolves with the created text channel.
     */
    async createTextChannel(guild: Guild, name: string): Promise<TextChannel> {
        try {
            const channel = await guild.channels.create({
                name,
                type: ChannelType.GuildText
            });

            return channel as TextChannel;
        } catch (error) {
            console.error(`Failed to create text channel: ${error}`);
            throw error;
        }
    }

    /**
     * Creates a voice channel in the specified guild.
     * @param {Guild} guild - The guild where the channel will be created.
     * @param {string} name - The name of the channel.
     * @returns {Promise<VoiceChannel>} - A promise that resolves with the created voice channel.
     */
    async createVoiceChannel(guild: Guild, name: string): Promise<VoiceChannel> {
        try {
            const channel = await guild.channels.create({
                name,
                type: ChannelType.GuildVoice
            });

            return channel as VoiceChannel;
        } catch (error) {
            console.error(`Failed to create voice channel: ${error}`);
            throw error;
        }
    }

    /**
     * Creates a category channel in the specified guild.
     * @param {Guild} guild - The guild where the channel will be created.
     * @param {string} name - The name of the channel.
     * @returns {Promise<CategoryChannel>} - A promise that resolves with the created category channel.
     */
    async createCategoryChannel(guild: Guild, name: string): Promise<CategoryChannel> {
        try {
            const channel = await guild.channels.create({
                name,
                type: ChannelType.GuildCategory
            });

            return channel as CategoryChannel;
        } catch (error) {
            console.error(`Failed to create category channel: ${error}`);
            throw error;
        }
    }

    /**
     * Deletes the specified channel.
     * @param {TextChannel | VoiceChannel | CategoryChannel} channel - The channel to be deleted.
     * @returns {Promise<void>} - A promise that resolves when the channel is deleted.
     */
    async deleteChannel(channel: TextChannel | VoiceChannel | CategoryChannel): Promise<void> {
        try {
            await channel.delete();
        } catch (error) {
            console.error(`Failed to delete channel: ${error}`);
            throw error;
        }
    }

    /**
     * Renames the specified channel.
     * @param {TextChannel | VoiceChannel | CategoryChannel} channel - The channel to be renamed.
     * @param {string} newName - The new name for the channel.
     * @returns {Promise<void>} - A promise that resolves when the channel is renamed.
     */
    async renameChannel(channel: TextChannel | VoiceChannel | CategoryChannel, newName: string): Promise<void> {
        try {
            await channel.setName(newName);
        } catch (error) {
            console.error(`Failed to rename channel: ${error}`);
            throw error;
        }
    }

    /**
     * Moves the specified channel to a new parent category.
     * @param {TextChannel | VoiceChannel | CategoryChannel} channel - The channel to be moved.
     * @param {CategoryChannel} newParent - The new parent category for the channel.
     * @returns {Promise<void>} - A promise that resolves when the channel is moved.
     */
    async moveChannel(channel: TextChannel | VoiceChannel | CategoryChannel, newParent: CategoryChannel): Promise<void> {
        try {
            await channel.setParent(newParent);
        } catch (error) {
            console.error(`Failed to move channel: ${error}`);
            throw error;
        }
    }
}
