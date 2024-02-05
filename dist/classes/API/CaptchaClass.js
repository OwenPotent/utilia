"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Captcha = void 0;
const Canvas = __importStar(require("canvas"));
/**
 * Generates a random text for captcha
 * @returns {string} The random text
 */
const randomText = () => Math.random()
    .toString(36)
    .replace(/[^a-z]|[gkqr]+/gi, "")
    .substring(0, 6)
    .toUpperCase();
/**
 * Shuffles the elements of an array
 * @param {number[]} arr - The array to be shuffled
 * @returns {number[]} The shuffled array
 */
const shuffleArray = (arr) => {
    let i = arr.length, temp, randomIndex;
    while (0 !== i) {
        randomIndex = Math.floor(Math.random() * i);
        i -= 1;
        temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
    return arr;
};
/**
 * Generates a Captcha Image
 */
class Captcha {
    _h;
    _canvas;
    _value = "";
    /**
     * Creates an instance of Captcha.
     * @param {number} _h - The height of the captcha image
     */
    constructor(_h = 250) {
        this._h = _h;
        this._h = Math.max(250, Math.min(400, _h));
        this._canvas = Canvas.createCanvas(400, this._h);
        this.generateCaptcha();
    }
    /**
     * Generates the captcha image
     * @private
     */
    generateCaptcha() {
        try {
            const ctx = this._canvas.getContext("2d");
            this.clearCanvas(ctx);
            this.drawLines(ctx);
            this.drawText(ctx);
            this.drawRandomCircles(ctx);
        }
        catch (error) {
            console.error("Error generating captcha:", error);
            throw error;
        }
    }
    /**
     * Clears the canvas
     * @param {Canvas.CanvasRenderingContext2D} ctx - The canvas rendering context
     * @private
     */
    clearCanvas(ctx) {
        try {
            ctx.globalAlpha = 1;
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 400, this._h);
        }
        catch (error) {
            console.error("Error clearing canvas:", error);
            throw error;
        }
    }
    /**
     * Draws random lines on the canvas
     * @param {Canvas.CanvasRenderingContext2D} ctx - The canvas rendering context
     * @private
     */
    drawLines(ctx) {
        try {
            ctx.globalAlpha = 0.2;
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            for (let i = 0; i < 10; i++) {
                ctx.beginPath();
                ctx.moveTo(0, Math.random() * this._h);
                ctx.lineTo(400, Math.random() * this._h);
                ctx.stroke();
            }
            for (let i = 0; i < 10; i++) {
                ctx.beginPath();
                ctx.moveTo(Math.random() * 400, 0);
                ctx.lineTo(Math.random() * 400, this._h);
                ctx.stroke();
            }
        }
        catch (error) {
            console.error("Error drawing lines:", error);
            throw error;
        }
    }
    /**
     * Draws the captcha text on the canvas
     * @param {Canvas.CanvasRenderingContext2D} ctx - The canvas rendering context
     * @private
     */
    drawText(ctx) {
        try {
            ctx.font = "bold 90px swift";
            ctx.fillStyle = "#000";
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.translate(0, this._h);
            ctx.translate(Math.round(Math.random() * 100 - 50) + 200, -1 * Math.round(Math.random() * (this._h / 4) - this._h / 8) - this._h / 2);
            ctx.rotate(Math.random() - 0.5);
            ctx.beginPath();
            this._value = randomText();
            ctx.fillText(this._value, 0, 0);
            ctx.restore();
        }
        catch (error) {
            console.error("Error drawing text:", error);
            throw error;
        }
    }
    /**
     * Draws random circles on the canvas
     * @param {Canvas.CanvasRenderingContext2D} ctx - The canvas rendering context
     * @private
     */
    drawRandomCircles(ctx) {
        try {
            for (let i = 0; i < 5000; i++) {
                ctx.beginPath();
                let color = "#";
                while (color.length < 7)
                    color += Math.round(Math.random() * 16).toString(16);
                color += "a0";
                ctx.fillStyle = color;
                ctx.arc(Math.round(Math.random() * 400), Math.round(Math.random() * this._h), Math.random() * 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        catch (error) {
            console.error("Error drawing circles:", error);
            throw error;
        }
    }
    /**
     * Gets the value of the captcha
     * @returns {string} The value of the captcha
     */
    get value() {
        return this._value;
    }
    /**
     * Gets the PNG stream of the captcha image
     * @returns {Canvas.PNGStream} The PNG stream of the captcha image
     */
    get PNGStream() {
        return this._canvas.createPNGStream();
    }
    /**
     * Gets the JPEG stream of the captcha image
     * @returns {Canvas.JPEGStream} The JPEG stream of the captcha image
     */
    get JPEGStream() {
        return this._canvas.createJPEGStream();
    }
    /**
     * Gets the data URL of the captcha image
     * @returns {string} The data URL of the captcha image
     */
    get dataURL() {
        return this._canvas.toDataURL("image/jpeg");
    }
}
exports.Captcha = Captcha;
