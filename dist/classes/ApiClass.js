"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
/**
 * The API class is used to get data from the API
 */
class Api {
    _url = "https://api.popcatdev.repl.co/";
    /**
     * Gives you a joke
     *
     * @returns A joke from the API
     */
    async getJoke() {
        const url = `${this._url}joke`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const joke = await res.json();
        return joke;
    }
    /**
     * Encodes a string or word
     *
     * @param text The text you wish to encode
     * @returns Binary code
     */
    async encode(text) {
        if (!text) {
            throw new Error("Utilia: No text specified.");
        }
        if (typeof text !== 'string') {
            throw new TypeError("Utilia: text is not a type of string.");
        }
        const url = `${this._url}encode?text=${text}`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const encoded = await res.json();
        return encoded;
    }
    /**
     * Decodes the binary code to a text or a string
     *
     * @param binaryCode Binary code you wish to decode (Example: 0100010100101)
     * @returns Decoded text
     */
    async decode(binaryCode) {
        if (!binaryCode) {
            throw new Error("Utilia: No binary code specified.");
        }
        if (typeof binaryCode !== 'number') {
            throw new TypeError("Utilia: binary is not a type of number.");
        }
        const url = `${this._url}decode?binary=${binaryCode}`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const decoded = await res.json();
        return decoded;
    }
    /**
     * Gets the info on a color hex
     *
     * @param colorHex - Color hex | must start with "#" (Example: "#87ceeb")
     * @returns Color hex info
     */
    async getColor(colorHex) {
        if (!colorHex) {
            throw new Error("Utilia: No color hex specified.");
        }
        if (typeof colorHex !== 'string') {
            throw new Error("Utilia: colorHex is not a type of string");
        }
        if (!colorHex.startsWith("#")) {
            throw new Error("Utilia: colorHex must start with a \"#\"");
        }
        const url = `${this._url}color/${colorHex}`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const color = await res.json();
        return color;
    }
    /**
     * Gets the text and make it a mocked text
     *
     * @param text The text you wish to mock
     * @returns Mocked text (Example: "tHis ApI Is bAd")
     */
    async mockText(text) {
        if (!text) {
            throw new Error("Utilia: No text specified.");
        }
        if (typeof text !== 'string') {
            throw new TypeError("Utilia: text is not a type of string.");
        }
        const url = `${this._url}mock?text=${text}`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const mock = await res.json();
        return mock;
    }
    /**
     * Gets info of a meme from Reddit
     *
     * @returns Meme in a JSON file
     */
    async getMeme() {
        const url = `${this._url}meme`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const meme = await res.json();
        return meme;
    }
    /**
     * Gets answers from an 8ball API
     *
     * @returns The answer
     */
    async eightBall() {
        const url = `${this._url}8ball`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const ans = await res.json();
        return ans;
    }
    /**
     * Reverses the text given (Example: "Utilia" = "ailitU")
     *
     * @param text Text you wish to reverse
     * @returns Reversed text
     */
    async reverseText(text) {
        if (!text) {
            throw new Error("Utilia: No text specified.");
        }
        if (typeof text !== 'string') {
            throw new TypeError("Utilia: text is not a type of string.");
        }
        const url = `${this._url}reverse?text=${text}`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const reversed = await res.json();
        return reversed;
    }
    /**
     * Gets info of an app from Playstore
     *
     * @param app App you wish to search
     * @returns App info
     */
    async getPlaystoreApp(app) {
        if (!app) {
            throw new Error("Utilia: No app specified.");
        }
        if (typeof app !== 'string') {
            throw new TypeError("Utilia: app is not a type of string.");
        }
        const url = `${this._url}playstore?q=${app}`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const appGot = await res.json();
        return appGot;
    }
    /**
     * Gets info of a song from iTunes
     *
     * @param song Song you wish to search
     * @returns Song info
     */
    async getItunesMusic(song) {
        if (!song) {
            throw new Error("Utilia: No song specified.");
        }
        if (typeof song !== 'string') {
            throw new TypeError("Utilia: song is not a type of string.");
        }
        const url = `${this._url}itunes?q=${song}`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const songGot = await res.json();
        return songGot;
    }
    /**
     * Convert your text into the doublestruck font
     *
     * @param text Text you wish to convert
     * @returns Doublestruck text
     */
    async doublestruck(text) {
        if (!text) {
            throw new Error("Utilia: No text specified.");
        }
        if (typeof text !== 'string') {
            throw new TypeError("Utilia: text is not a type of string.");
        }
        const url = `${this._url}doublestruck?text=${text}`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const dtext = await res.json();
        return dtext;
    }
    /**
     * Converts provided text to Morse code
     *
     * @param text Text you wish to convert
     * @returns Morse code
     */
    async textToMorse(text) {
        if (!text) {
            throw new Error("Utilia: No text specified.");
        }
        if (typeof text !== 'string') {
            throw new TypeError("Utilia: text is not a type of string.");
        }
        const url = `${this._url}texttomorse?text=${text}`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const ttm = await res.json();
        return ttm;
    }
    /**
     * Gets a would you rather question and outputs 2 options
     *
     * @returns Two options
     */
    async wyr() {
        const url = `${this._url}wyr`;
        const res = await (0, node_fetch_1.default)(url);
        if (!res) {
            return "No data available";
        }
        const wyr = await res.json();
        return wyr;
    }
}
exports.Api = Api;
