import { MessageEmbed } from "discord.js";
import { EmbedderOptions } from "../types/types";
import { ColorResolvable, Colors } from "../constants/constants";

// TODO: Create custom embed class
// ! Embedder not useable!

export class Embedder {
    constructor(options: EmbedderOptions) {
        throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
    }

    private resolveString(data: any) {
        if (typeof data === "string") return data;
        if (Array.isArray(data)) return data.join("\n");
        return String(data);
    }

    private resolveColor(color: ColorResolvable) {
        if (typeof color === 'string') {
            if (color === 'RANDOM') return Math.floor(Math.random() * (0xffffff + 1));
            if (color === 'DEFAULT') return 0;
            color = Colors[color] || parseInt(color, 16)
        } else if (Array.isArray(color)) {
            color = (color[0] << 16) + (color[1] << 8) + color[2];
        }

        if (color < 0 || color > 0xffffff) throw new RangeError('COLOR_RANGE');
        else if (color && isNaN(color)) throw new TypeError('COLOR_CONVERT');

        return color;
    }

    private _title: string | undefined;
    private _description: string | undefined;
    private _color: EmbedderOptions["color"]

    public setTitle(title: EmbedderOptions["title"]) {
        title = this.resolveString(title);
        this._title = title;
        return this
    }

    public setDescription(description: EmbedderOptions["description"]) {
        description = this.resolveString(description);
        this._description = description;
        return this
    }

    public setColor(color: ColorResolvable) {
        color = this.resolveColor(color);
        this._color = color;
        return this
    }
}