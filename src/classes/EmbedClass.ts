import { MessageEmbed, MessageEmbedOptions } from "discord.js";
import { EmbedderOptions } from "../types/types";

/**
 * Advanced MessageEmbed 
 */
export class Embedder {
    private EmbedOptions = {
        useCodeblockInDescription: false,
        useBoldInDescription: false,
        useTimestamp: false
    }

    constructor(private options: EmbedderOptions = {}) {
        this.EmbedOptions = {
            ...this.EmbedOptions,
            ...options
        }
    }

    // Add codeblock to description
    public addCodeblock(description?: string): string | undefined {
        if (this.EmbedOptions.useCodeblockInDescription) {
            return `\`\`\`${description}\`\`\``;
        }

        return description;
    }

    // Add bold to description
    public addBold(description?: string): string | undefined {
        if (this.EmbedOptions.useBoldInDescription) {
            return `**${description}**`;
        }

        return description;
    }

    // Add timestamp to description
    public addTimestamp(description?: string): string | undefined {
        if (this.EmbedOptions.useTimestamp) {
            return `${description} ${new Date().toLocaleString()}`;
        }

        return description;
    }

    // Create embed and use function above
    public createEmbed(embedOptions: MessageEmbedOptions): MessageEmbed {
        const embed = new MessageEmbed(embedOptions);

        if (this.EmbedOptions.useCodeblockInDescription) {
            embed.setDescription(this.addCodeblock(embedOptions.description));
        } else {
            embed.setDescription(this.addBold(embedOptions.description));
        }

        return embed;
    }
}