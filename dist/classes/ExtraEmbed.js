"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtraEmbed = void 0;
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
     * @param language - The language of the code block. Defaults to 'typescript'.
     * @returns The updated ExtraEmbed instance.
     */
    setDescription(description, codeblocks = false, language = 'typescript') {
        if (codeblocks) {
            const codeblockLanguage = language.toLowerCase();
            if (codeblockLanguage === 'typescript' || codeblockLanguage === 'javascript') {
                description = '```' + codeblockLanguage + '\n' + description + '\n```';
            }
            else {
                throw new Error('Invalid code block language');
            }
        }
        return super.setDescription(description);
    }
}
exports.ExtraEmbed = ExtraEmbed;
