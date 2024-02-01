"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
/**
 * Represents an extended version of EmbedBuilder with additional features.
 */
class ExtraEmbed extends discord_js_1.EmbedBuilder {
    /**
     * Creates a new instance of ExtraEmbed.
     * @param color - The color of the embed.
     * @param options - The additional options for the embed.
     */
    constructor(color = 'Default', options) {
        super();
        this.setColor(color);
        if (options?.timestamp) {
            this.setTimestamp();
        }
        if (options?.author) {
            this.setAuthor(options.author.data);
        }
        if (options?.footer) {
            this.setFooter(options.footer.data);
        }
    }
    /**
     * Sets the description of the embed.
     * @param description - The description text.
     * @param codeblocks - Whether to wrap the description in a code block.
     * @param language - The language of the code block.
     * @returns The updated ExtraEmbed instance.
     */
    setDescription(description, codeblocks = false, language) {
        if (codeblocks) {
            const codeblockLanguage = language ? language : 'typescript';
            description = '```' + codeblockLanguage + '\n' + description + '\n```';
        }
        return super.setDescription(description);
    }
}
exports.default = ExtraEmbed;
