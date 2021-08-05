import { MessageEmbed } from "discord.js";
import { ColorResolvable, Colors } from "../constants/constants";
import { EmbedderOptions } from "../types/types";
// TODO: Create custom embed class
// ! Embedder not useable!

export class Embedder {
    private _useCodeblockInDescription?: boolean
    private _useBoldInDescription?: boolean
    private _useTimestamp?: boolean


    constructor(options: EmbedderOptions) {
        if (options.useBoldInDescription) {
            this._useCodeblockInDescription = options.useBoldInDescription
        }

        if (options.useBoldInDescription) {
            this._useBoldInDescription = options.useBoldInDescription
        }

        if (options.useTimestamp) {
            this._useTimestamp = options.useTimestamp
        }
    }

    
}