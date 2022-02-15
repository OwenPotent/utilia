"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embedder = void 0;
const discord_js_1 = require("discord.js");
/**
 * Advanced MessageEmbed
 */
class Embedder {
    constructor(options = {}) {
        this.options = options;
        this.EmbedOptions = {
            useCodeblockInDescription: false,
            useBoldInDescription: false,
            useTimestamp: false
        };
        this.EmbedOptions = Object.assign(Object.assign({}, this.EmbedOptions), options);
    }
    // Add codeblock to description
    addCodeblock(description) {
        if (this.EmbedOptions.useCodeblockInDescription) {
            return `\`\`\`${description}\`\`\``;
        }
        return description;
    }
    // Add bold to description
    addBold(description) {
        if (this.EmbedOptions.useBoldInDescription) {
            return `**${description}**`;
        }
        return description;
    }
    // Add timestamp to description
    addTimestamp(description) {
        if (this.EmbedOptions.useTimestamp) {
            return `${description} ${new Date().toLocaleString()}`;
        }
        return description;
    }
    // Create embed and use function above
    createEmbed(embedOptions) {
        const embed = new discord_js_1.MessageEmbed(embedOptions);
        if (this.EmbedOptions.useCodeblockInDescription) {
            embed.setDescription(this.addCodeblock(embedOptions.description));
        }
        else {
            embed.setDescription(this.addBold(embedOptions.description));
        }
        return embed;
    }
}
exports.Embedder = Embedder;
