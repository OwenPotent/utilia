import * as Canvas from "canvas";
/**
 * Generates a Captcha Image
 */
export declare class Captcha {
    private _canvas;
    private _value;
    constructor(_h?: number);
    get value(): string;
    get PNGStream(): Canvas.PNGStream;
    get JPEGStream(): Canvas.JPEGStream;
    get dataURL(): string;
}
