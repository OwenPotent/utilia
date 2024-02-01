import { Client, Guild, TextChannel, VoiceChannel, CategoryChannel, ChannelType } from 'discord.js';

/**
 * The ChannelCreator class provides methods to create, delete, rename, and move channels in a Discord guild.
 */
class ChannelCreator {
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
        const channel = await guild.channels.create({
            name,
            type: ChannelType.GuildText
        });

        return channel as TextChannel;
    }

    /**
     * Creates a voice channel in the specified guild.
     * @param {Guild} guild - The guild where the channel will be created.
     * @param {string} name - The name of the channel.
     * @returns {Promise<VoiceChannel>} - A promise that resolves with the created voice channel.
     */
    async createVoiceChannel(guild: Guild, name: string): Promise<VoiceChannel> {
        const channel = await guild.channels.create({
            name,
            type: ChannelType.GuildVoice
        });

        return channel as VoiceChannel;
    }

    /**
     * Creates a category channel in the specified guild.
     * @param {Guild} guild - The guild where the channel will be created.
     * @param {string} name - The name of the channel.
     * @returns {Promise<CategoryChannel>} - A promise that resolves with the created category channel.
     */
    async createCategoryChannel(guild: Guild, name: string): Promise<CategoryChannel> {
        const channel = await guild.channels.create({
            name,
            type: ChannelType.GuildCategory
        });

        return channel as CategoryChannel;
    }

    /**
     * Deletes the specified channel.
     * @param {TextChannel | VoiceChannel | CategoryChannel} channel - The channel to be deleted.
     * @returns {Promise<void>} - A promise that resolves when the channel is deleted.
     */
    async deleteChannel(channel: TextChannel | VoiceChannel | CategoryChannel): Promise<void> {
        await channel.delete();
    }

    /**
     * Renames the specified channel.
     * @param {TextChannel | VoiceChannel | CategoryChannel} channel - The channel to be renamed.
     * @param {string} newName - The new name for the channel.
     * @returns {Promise<void>} - A promise that resolves when the channel is renamed.
     */
    async renameChannel(channel: TextChannel | VoiceChannel | CategoryChannel, newName: string): Promise<void> {
        await channel.setName(newName);
    }

    /**
     * Moves the specified channel to a new parent category.
     * @param {TextChannel | VoiceChannel | CategoryChannel} channel - The channel to be moved.
     * @param {CategoryChannel} newParent - The new parent category for the channel.
     * @returns {Promise<void>} - A promise that resolves when the channel is moved.
     */
    async moveChannel(channel: TextChannel | VoiceChannel | CategoryChannel, newParent: CategoryChannel): Promise<void> {
        await channel.setParent(newParent);
    }
}

export default ChannelCreator;
