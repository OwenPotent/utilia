import fetch from "node-fetch";

export class Api {
    private _url = "https://api.popcatdev.repl.co/"

    /**
     * Gives you a joke
     * 
     * @returns A joke from the api
     */

    public async getJoke() {
        this._url += 'joke'
        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let jokes = res.json()
        return jokes
    }

    /**
     * Encodes a string or word
     * 
     * @param text The text you wish to encode
     * @returns binary code
     */

    public async encode(text: string): Promise<any> {
        if (!text) throw new Error("Utilia: No text specified.")
        if (typeof text !== 'string') throw new TypeError("Utilia: text is not a type of string.")
        this._url += `encode?text=${text}`

        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let encoded = res.json()
        return encoded
    }

    /**
     * Decodes the binary code to a text or a string
     * 
     * @param binaryCode Binary code you wish to decode (Example: 0100010100101)
     * @returns Decoded text
     */

    public async decode(binaryCode: number): Promise<any> {
        if (!binaryCode) throw new Error("Utilia: No binary code specified.")
        if (typeof binaryCode !== 'number') throw new TypeError("Utilia: binary is not a type of number.")
        this._url += `decode?binary=${binaryCode}`

        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let decoded = res.json()
        return decoded
    }

    /**
     * Gets the info on a color hex
     * 
     * @param colorHex - Color hex | must start with "#" (Example: "#87ceeb")
     * 
     * @returns color hex info 
     */

    public async getColor(colorHex: string): Promise<any> {
        if (!colorHex) throw new Error("Utilia: No color hex specified.")
        if (typeof colorHex !== 'string') throw new Error("Utilia: colorHex is not a type of string")
        if (!colorHex.startsWith("#")) throw new Error("Utilia: colorHex must start with a \"#\"")
        this._url += `color/${colorHex}`

        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let color = res.json()

        return color
    }

    /**
     * Gets the text and make it a mocked text
     * 
     * @param text The text you wish to mock
     * @returns Mocked text (Example: "tHis ApI Is bAd")
     */

    public async mockText(text: string): Promise<any> {
        if (!text) throw new Error("Utilia: No text specified.")
        if (typeof text !== 'string') throw new TypeError("Utilia: text is not a type of string.")

        this._url += `mock?text=${text}`

        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let mock = res.json()

        return mock
    }

    /**
     * Gets info of a meme from reddit
     * 
     * @returns meme in a json file
     */

    public async getMeme(): Promise<any> {
        this._url += `meme`

        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let meme = res.json()

        return meme
    }

    /**
     * Gets answers from an 8ball api
     * 
     * @returns the answer
     */

    public async eightBall(): Promise<any> {
        this._url += `8ball`

        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let ans = res.json()

        return ans
    }

    /**
     * Reverses the text given (Example: "Utilia" = "ailitU")
     * 
     * @param text Text you wish to reverse
     * @returns Reversed text
     */

    public async reverseText(text: string): Promise<any> {
        if (!text) throw new Error("Utilia: No text specified.")
        if (typeof text !== 'string') throw new TypeError("Utilia: text is not a type of string.")

        this._url += `reverse?text${text}`

        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let reversed = res.json()

        return reversed
    }

    /**
     * Gets info of an app from Playstore
     * 
     * @param app App you wish to search
     * @returns App info
     */

    public async getPlaystoreApp(app: string): Promise<any> {
        if (!app) throw new Error("Utilia: No app specified.")
        if (typeof app !== 'string') throw new TypeError("Utilia: app is not a type of string.")
        this._url += `playstore?q=${app}`

        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let appGot = res.json()

        return appGot
    }

    /**
     * Gets info of a song from Itunes
     * 
     * @param song song you wish to search
     * @returns song info
     */

    public async getItunesMusic(song: string): Promise<any> {
        if (!song) throw new Error("Utilia: No song specified.")
        if (typeof song !== 'string') throw new TypeError("Utilia: song is not a type of string.")
        this._url += `itunes?q=${song}`

        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let songGot = res.json()

        return songGot
    }

    /**
     * Convert your text into the doublestruck font
     * 
     * @param text Text you wish to convert
     * @returns Doublestruck text
     */

    public async doublestruck(text: string): Promise<any> {
        if (!text) throw new Error("Utilia: No text specified.")
        if (typeof text !== 'string') throw new TypeError("Utilia: text is not a type of string.")
        this._url += `doublestruck?text=${text}`

        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let dtext = res.json()

        return dtext
    }

    /**
     * Converts provided text to morse code
     * 
     * @param text Text you wish to convert
     * @returns Morse code
     */

    public async textToMorse(text: string): Promise<any> {
        if (!text) throw new Error("Utilia: No text specified.")
        if (typeof text !== 'string') throw new TypeError("Utilia: text is not a type of string.")
        this._url += `texttomorse?text=${text}`

        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let ttm = res.json()

        return ttm
    }

    /**
     * Gets a would you rather question and outputs 2 options
     * 
     * @returns Two options
     */

    public async wyr(): Promise<any> {
        this._url += 'wyr'

        let res = await fetch(this._url)

        if (!res) {
            return "No data available"
        }

        let wyr = res.json()

        return wyr
    }
}