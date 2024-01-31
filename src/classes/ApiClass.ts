import fetch from "node-fetch";

export class Api {
    private _url = "https://api.popcatdev.repl.co/";

    /**
     * Gives you a joke
     * 
     * @returns A joke from the API
     */
    public async getJoke(): Promise<any> {
        const url = `${this._url}joke`;
        const res = await fetch(url);

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
    public async encode(text: string): Promise<any> {
        if (!text) {
            throw new Error("Utilia: No text specified.");
        }
        if (typeof text !== 'string') {
            throw new TypeError("Utilia: text is not a type of string.");
        }

        const url = `${this._url}encode?text=${text}`;
        const res = await fetch(url);

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
    public async decode(binaryCode: number): Promise<any> {
        if (!binaryCode) {
            throw new Error("Utilia: No binary code specified.");
        }
        if (typeof binaryCode !== 'number') {
            throw new TypeError("Utilia: binary is not a type of number.");
        }

        const url = `${this._url}decode?binary=${binaryCode}`;
        const res = await fetch(url);

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
    public async getColor(colorHex: string): Promise<any> {
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
        const res = await fetch(url);

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
    public async mockText(text: string): Promise<any> {
        if (!text) {
            throw new Error("Utilia: No text specified.");
        }
        if (typeof text !== 'string') {
            throw new TypeError("Utilia: text is not a type of string.");
        }

        const url = `${this._url}mock?text=${text}`;
        const res = await fetch(url);

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
    public async getMeme(): Promise<any> {
        const url = `${this._url}meme`;
        const res = await fetch(url);

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
    public async eightBall(): Promise<any> {
        const url = `${this._url}8ball`;
        const res = await fetch(url);

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
    public async reverseText(text: string): Promise<any> {
        if (!text) {
            throw new Error("Utilia: No text specified.");
        }
        if (typeof text !== 'string') {
            throw new TypeError("Utilia: text is not a type of string.");
        }

        const url = `${this._url}reverse?text=${text}`;
        const res = await fetch(url);

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
    public async getPlaystoreApp(app: string): Promise<any> {
        if (!app) {
            throw new Error("Utilia: No app specified.");
        }
        if (typeof app !== 'string') {
            throw new TypeError("Utilia: app is not a type of string.");
        }

        const url = `${this._url}playstore?q=${app}`;
        const res = await fetch(url);

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
    public async getItunesMusic(song: string): Promise<any> {
        if (!song) {
            throw new Error("Utilia: No song specified.");
        }
        if (typeof song !== 'string') {
            throw new TypeError("Utilia: song is not a type of string.");
        }

        const url = `${this._url}itunes?q=${song}`;
        const res = await fetch(url);

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
    public async doublestruck(text: string): Promise<any> {
        if (!text) {
            throw new Error("Utilia: No text specified.");
        }
        if (typeof text !== 'string') {
            throw new TypeError("Utilia: text is not a type of string.");
        }

        const url = `${this._url}doublestruck?text=${text}`;
        const res = await fetch(url);

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
    public async textToMorse(text: string): Promise<any> {
        if (!text) {
            throw new Error("Utilia: No text specified.");
        }
        if (typeof text !== 'string') {
            throw new TypeError("Utilia: text is not a type of string.");
        }

        const url = `${this._url}texttomorse?text=${text}`;
        const res = await fetch(url);

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
    public async wyr(): Promise<any> {
        const url = `${this._url}wyr`;
        const res = await fetch(url);

        if (!res) {
            return "No data available";
        }

        const wyr = await res.json();
        return wyr;
    }
}