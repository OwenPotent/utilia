import { EmbedderOptions } from "../types/types";
import { ColorResolvable } from "../constants/constants";
export declare class Embedder {
    constructor(options: EmbedderOptions);
    private resolveString;
    private resolveColor;
    private _title;
    private _description;
    private _color;
    setTitle(title: EmbedderOptions["title"]): this;
    setDescription(description: EmbedderOptions["description"]): this;
    setColor(color: ColorResolvable): this;
}
