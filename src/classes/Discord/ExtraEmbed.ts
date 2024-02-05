import { EmbedBuilder } from 'discord.js';
import { ExtraEmbedColor, ExtraEmbedOptions } from '../../types/types';

/**
 * Represents an extended version of EmbedBuilder with additional features.
 */
export class ExtraEmbed extends EmbedBuilder {
    /**
     * Creates a new instance of ExtraEmbed.
     * @param color - The color of the embed.
     * @param options - The additional options for the embed.
     */
    constructor(color: ExtraEmbedColor = 'Default', options?: ExtraEmbedOptions) {
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
    setDescription(description: string, codeblocks: boolean = false, language: string = 'typescript'): this {
        if (codeblocks) {
            const codeblockLanguage = language.toLowerCase();
            if (codeblockLanguage === 'typescript' || codeblockLanguage === 'javascript') {
                description = '```' + codeblockLanguage + '\n' + description + '\n```';
            } else {
                throw new Error('Invalid code block language');
            }
        }
        return super.setDescription(description);
    }
}