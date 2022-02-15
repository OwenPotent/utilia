import { MessageEmbed, MessageEmbedOptions } from "discord.js";
import { EmbedderOptions } from "../types/types";
/**
 * Advanced MessageEmbed
 */
export declare class Embedder {
    private options;
    private EmbedOptions;
    constructor(options?: EmbedderOptions);
    addCodeblock(description?: string): string | undefined;
    addBold(description?: string): string | undefined;
    addTimestamp(description?: string): string | undefined;
    createEmbed(embedOptions: MessageEmbedOptions): MessageEmbed;
}
