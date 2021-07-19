"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embedder = void 0;
const constants_1 = require("../constants/constants");
// TODO: Create custom embed class
// ! Embedder not useable!
class Embedder {
    constructor(options) {
        throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
    }
    resolveString(data) {
        if (typeof data === "string")
            return data;
        if (Array.isArray(data))
            return data.join("\n");
        return String(data);
    }
    resolveColor(color) {
        if (typeof color === 'string') {
            if (color === 'RANDOM')
                return Math.floor(Math.random() * (0xffffff + 1));
            if (color === 'DEFAULT')
                return 0;
            color = constants_1.Colors[color] || parseInt(color, 16);
        }
        else if (Array.isArray(color)) {
            color = (color[0] << 16) + (color[1] << 8) + color[2];
        }
        if (color < 0 || color > 0xffffff)
            throw new RangeError('COLOR_RANGE');
        else if (color && isNaN(color))
            throw new TypeError('COLOR_CONVERT');
        return color;
    }
    setTitle(title) {
        title = this.resolveString(title);
        this._title = title;
        return this;
    }
    setDescription(description) {
        description = this.resolveString(description);
        this._description = description;
        return this;
    }
    setColor(color) {
        color = this.resolveColor(color);
        this._color = color;
        return this;
    }
}
exports.Embedder = Embedder;
