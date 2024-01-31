"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class Api {
    constructor() {
        this._url = "https://api.popcatdev.repl.co/";
    }
    /**
     * Gives you a joke
     *
     * @returns A joke from the API
     */
    getJoke() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this._url}joke`;
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const joke = yield res.json();
            return joke;
        });
    }
    /**
     * Encodes a string or word
     *
     * @param text The text you wish to encode
     * @returns Binary code
     */
    encode(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!text) {
                throw new Error("Utilia: No text specified.");
            }
            if (typeof text !== 'string') {
                throw new TypeError("Utilia: text is not a type of string.");
            }
            const url = `${this._url}encode?text=${text}`;
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const encoded = yield res.json();
            return encoded;
        });
    }
    /**
     * Decodes the binary code to a text or a string
     *
     * @param binaryCode Binary code you wish to decode (Example: 0100010100101)
     * @returns Decoded text
     */
    decode(binaryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!binaryCode) {
                throw new Error("Utilia: No binary code specified.");
            }
            if (typeof binaryCode !== 'number') {
                throw new TypeError("Utilia: binary is not a type of number.");
            }
            const url = `${this._url}decode?binary=${binaryCode}`;
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const decoded = yield res.json();
            return decoded;
        });
    }
    /**
     * Gets the info on a color hex
     *
     * @param colorHex - Color hex | must start with "#" (Example: "#87ceeb")
     * @returns Color hex info
     */
    getColor(colorHex) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const color = yield res.json();
            return color;
        });
    }
    /**
     * Gets the text and make it a mocked text
     *
     * @param text The text you wish to mock
     * @returns Mocked text (Example: "tHis ApI Is bAd")
     */
    mockText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!text) {
                throw new Error("Utilia: No text specified.");
            }
            if (typeof text !== 'string') {
                throw new TypeError("Utilia: text is not a type of string.");
            }
            const url = `${this._url}mock?text=${text}`;
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const mock = yield res.json();
            return mock;
        });
    }
    /**
     * Gets info of a meme from Reddit
     *
     * @returns Meme in a JSON file
     */
    getMeme() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this._url}meme`;
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const meme = yield res.json();
            return meme;
        });
    }
    /**
     * Gets answers from an 8ball API
     *
     * @returns The answer
     */
    eightBall() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this._url}8ball`;
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const ans = yield res.json();
            return ans;
        });
    }
    /**
     * Reverses the text given (Example: "Utilia" = "ailitU")
     *
     * @param text Text you wish to reverse
     * @returns Reversed text
     */
    reverseText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!text) {
                throw new Error("Utilia: No text specified.");
            }
            if (typeof text !== 'string') {
                throw new TypeError("Utilia: text is not a type of string.");
            }
            const url = `${this._url}reverse?text=${text}`;
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const reversed = yield res.json();
            return reversed;
        });
    }
    /**
     * Gets info of an app from Playstore
     *
     * @param app App you wish to search
     * @returns App info
     */
    getPlaystoreApp(app) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!app) {
                throw new Error("Utilia: No app specified.");
            }
            if (typeof app !== 'string') {
                throw new TypeError("Utilia: app is not a type of string.");
            }
            const url = `${this._url}playstore?q=${app}`;
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const appGot = yield res.json();
            return appGot;
        });
    }
    /**
     * Gets info of a song from iTunes
     *
     * @param song Song you wish to search
     * @returns Song info
     */
    getItunesMusic(song) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!song) {
                throw new Error("Utilia: No song specified.");
            }
            if (typeof song !== 'string') {
                throw new TypeError("Utilia: song is not a type of string.");
            }
            const url = `${this._url}itunes?q=${song}`;
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const songGot = yield res.json();
            return songGot;
        });
    }
    /**
     * Convert your text into the doublestruck font
     *
     * @param text Text you wish to convert
     * @returns Doublestruck text
     */
    doublestruck(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!text) {
                throw new Error("Utilia: No text specified.");
            }
            if (typeof text !== 'string') {
                throw new TypeError("Utilia: text is not a type of string.");
            }
            const url = `${this._url}doublestruck?text=${text}`;
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const dtext = yield res.json();
            return dtext;
        });
    }
    /**
     * Converts provided text to Morse code
     *
     * @param text Text you wish to convert
     * @returns Morse code
     */
    textToMorse(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!text) {
                throw new Error("Utilia: No text specified.");
            }
            if (typeof text !== 'string') {
                throw new TypeError("Utilia: text is not a type of string.");
            }
            const url = `${this._url}texttomorse?text=${text}`;
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const ttm = yield res.json();
            return ttm;
        });
    }
    /**
     * Gets a would you rather question and outputs 2 options
     *
     * @returns Two options
     */
    wyr() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this._url}wyr`;
            const res = yield (0, node_fetch_1.default)(url);
            if (!res) {
                return "No data available";
            }
            const wyr = yield res.json();
            return wyr;
        });
    }
}
exports.Api = Api;
