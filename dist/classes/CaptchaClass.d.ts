import * as Canvas from "canvas";
export default class Captcha {
    private _canvas;
    private _value;
    constructor(_h?: number);
    get value(): string;
    get PNGStream(): Canvas.PNGStream;
    get JPEGStream(): Canvas.JPEGStream;
    get dataURL(): string;
}
