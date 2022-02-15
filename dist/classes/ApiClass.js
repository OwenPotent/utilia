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
        this._tinyUrl = "https://tinyurl.com/api-create.php";
    }
    /**
     * Gives you a joke
     *
     * @returns A joke from the api
     */
    getJoke() {
        return __awaiter(this, void 0, void 0, function* () {
            this._url += 'joke';
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let jokes = res.json();
            return jokes;
        });
    }
    /**
     * Encodes a string or word
     *
     * @param text The text you wish to encode
     * @returns binary code
     */
    encode(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!text)
                throw new Error("Utilia: No text specified.");
            if (typeof text !== 'string')
                throw new TypeError("Utilia: text is not a type of string.");
            this._url += `encode?text=${text}`;
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let encoded = res.json();
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
            if (!binaryCode)
                throw new Error("Utilia: No binary code specified.");
            if (typeof binaryCode !== 'number')
                throw new TypeError("Utilia: binary is not a type of number.");
            this._url += `decode?binary=${binaryCode}`;
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let decoded = res.json();
            return decoded;
        });
    }
    /**
     * Gets the info on a color hex
     *
     * @param colorHex - Color hex | must start with "#" (Example: "#87ceeb")
     *
     * @returns color hex info
     */
    getColor(colorHex) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!colorHex)
                throw new Error("Utilia: No color hex specified.");
            if (typeof colorHex !== 'string')
                throw new Error("Utilia: colorHex is not a type of string");
            if (!colorHex.startsWith("#"))
                throw new Error("Utilia: colorHex must start with a \"#\"");
            this._url += `color/${colorHex}`;
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let color = res.json();
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
            if (!text)
                throw new Error("Utilia: No text specified.");
            if (typeof text !== 'string')
                throw new TypeError("Utilia: text is not a type of string.");
            this._url += `mock?text=${text}`;
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let mock = res.json();
            return mock;
        });
    }
    /**
     * Gets info of a meme from reddit
     *
     * @returns meme in a json file
     */
    getMeme() {
        return __awaiter(this, void 0, void 0, function* () {
            this._url += `meme`;
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let meme = res.json();
            return meme;
        });
    }
    /**
     * Gets answers from an 8ball api
     *
     * @returns the answer
     */
    eightBall() {
        return __awaiter(this, void 0, void 0, function* () {
            this._url += `8ball`;
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let ans = res.json();
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
            if (!text)
                throw new Error("Utilia: No text specified.");
            if (typeof text !== 'string')
                throw new TypeError("Utilia: text is not a type of string.");
            this._url += `reverse?text${text}`;
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let reversed = res.json();
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
            if (!app)
                throw new Error("Utilia: No app specified.");
            if (typeof app !== 'string')
                throw new TypeError("Utilia: app is not a type of string.");
            this._url += `playstore?q=${app}`;
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let appGot = res.json();
            return appGot;
        });
    }
    /**
     * Gets info of a song from Itunes
     *
     * @param song song you wish to search
     * @returns song info
     */
    getItunesMusic(song) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!song)
                throw new Error("Utilia: No song specified.");
            if (typeof song !== 'string')
                throw new TypeError("Utilia: song is not a type of string.");
            this._url += `itunes?q=${song}`;
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let songGot = res.json();
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
            if (!text)
                throw new Error("Utilia: No text specified.");
            if (typeof text !== 'string')
                throw new TypeError("Utilia: text is not a type of string.");
            this._url += `doublestruck?text=${text}`;
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let dtext = res.json();
            return dtext;
        });
    }
    /**
     * Converts provided text to morse code
     *
     * @param text Text you wish to convert
     * @returns Morse code
     */
    textToMorse(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!text)
                throw new Error("Utilia: No text specified.");
            if (typeof text !== 'string')
                throw new TypeError("Utilia: text is not a type of string.");
            this._url += `texttomorse?text=${text}`;
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let ttm = res.json();
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
            this._url += 'wyr';
            let res = yield (0, node_fetch_1.default)(this._url);
            if (!res) {
                return "No data available";
            }
            let wyr = res.json();
            return wyr;
        });
    }
}
exports.Api = Api;
