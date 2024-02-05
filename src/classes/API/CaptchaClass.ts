import * as Canvas from "canvas";

/**
 * Interface for coordinates
 */
interface Coordinates {
    x: number;
    y: number;
}

/**
 * Generates a random text for captcha
 * @returns {string} The random text
 */
const randomText = (): string =>
    Math.random()
        .toString(36)
        .replace(/[^a-z]|[gkqr]+/gi, "")
        .substring(0, 6)
        .toUpperCase();

/**
 * Shuffles the elements of an array
 * @param {number[]} arr - The array to be shuffled
 * @returns {number[]} The shuffled array
 */
const shuffleArray = (arr: number[]): number[] => {
    let i: number = arr.length,
        temp: number,
        randomIndex: number;
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
export class Captcha {
    private _canvas: Canvas.Canvas;
    private _value: string = "";

    /**
     * Creates an instance of Captcha.
     * @param {number} _h - The height of the captcha image
     */
    constructor(private _h: number = 250) {
        this._h = Math.max(250, Math.min(400, _h));
        this._canvas = Canvas.createCanvas(400, this._h);
        this.generateCaptcha();
    }

    /**
     * Generates the captcha image
     * @private
     */
    private generateCaptcha(): void {
        try {
            const ctx = this._canvas.getContext("2d");
            this.clearCanvas(ctx);
            this.drawLines(ctx);
            this.drawText(ctx);
            this.drawRandomCircles(ctx);
        } catch (error) {
            console.error("Error generating captcha:", error);
            throw error;
        }
    }

    /**
     * Clears the canvas
     * @param {Canvas.CanvasRenderingContext2D} ctx - The canvas rendering context
     * @private
     */
    private clearCanvas(ctx: Canvas.CanvasRenderingContext2D): void {
        try {
            ctx.globalAlpha = 1;
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, 400, this._h);
        } catch (error) {
            console.error("Error clearing canvas:", error);
            throw error;
        }
    }

    /**
     * Draws random lines on the canvas
     * @param {Canvas.CanvasRenderingContext2D} ctx - The canvas rendering context
     * @private
     */
    private drawLines(ctx: Canvas.CanvasRenderingContext2D): void {
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
        } catch (error) {
            console.error("Error drawing lines:", error);
            throw error;
        }
    }

    /**
     * Draws the captcha text on the canvas
     * @param {Canvas.CanvasRenderingContext2D} ctx - The canvas rendering context
     * @private
     */
    private drawText(ctx: Canvas.CanvasRenderingContext2D): void {
        try {
            ctx.font = "bold 90px swift";
            ctx.fillStyle = "#000";
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.translate(0, this._h);

            ctx.translate(
                Math.round(Math.random() * 100 - 50) + 200,
                -1 * Math.round(Math.random() * (this._h / 4) - this._h / 8) - this._h / 2
            );
            ctx.rotate(Math.random() - 0.5);

            ctx.beginPath();
            this._value = randomText();
            ctx.fillText(this._value, 0, 0);

            ctx.restore();
        } catch (error) {
            console.error("Error drawing text:", error);
            throw error;
        }
    }

    /**
     * Draws random circles on the canvas
     * @param {Canvas.CanvasRenderingContext2D} ctx - The canvas rendering context
     * @private
     */
    private drawRandomCircles(ctx: Canvas.CanvasRenderingContext2D): void {
        try {
            for (let i = 0; i < 5000; i++) {
                ctx.beginPath();
                let color = "#";
                while (color.length < 7) color += Math.round(Math.random() * 16).toString(16);
                color += "a0";
                ctx.fillStyle = color;
                ctx.arc(
                    Math.round(Math.random() * 400),
                    Math.round(Math.random() * this._h),
                    Math.random() * 2,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }
        } catch (error) {
            console.error("Error drawing circles:", error);
            throw error;
        }
    }

    /**
     * Gets the value of the captcha
     * @returns {string} The value of the captcha
     */
    get value(): string {
        return this._value;
    }

    /**
     * Gets the PNG stream of the captcha image
     * @returns {Canvas.PNGStream} The PNG stream of the captcha image
     */
    get PNGStream(): Canvas.PNGStream {
        return this._canvas.createPNGStream();
    }

    /**
     * Gets the JPEG stream of the captcha image
     * @returns {Canvas.JPEGStream} The JPEG stream of the captcha image
     */
    get JPEGStream(): Canvas.JPEGStream {
        return this._canvas.createJPEGStream();
    }

    /**
     * Gets the data URL of the captcha image
     * @returns {string} The data URL of the captcha image
     */
    get dataURL(): string {
        return this._canvas.toDataURL("image/jpeg");
    }
}