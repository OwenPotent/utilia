export declare class Api {
    private _url;
    private _tinyUrl;
    /**
     * Gives you a joke
     *
     * @returns A joke from the api
     */
    getJoke(): Promise<any>;
    /**
     * Encodes a string or word
     *
     * @param text The text you wish to encode
     * @returns binary code
     */
    encode(text: string): Promise<any>;
    /**
     * Decodes the binary code to a text or a string
     *
     * @param binaryCode Binary code you wish to decode (Example: 0100010100101)
     * @returns Decoded text
     */
    decode(binaryCode: number): Promise<any>;
    /**
     * Gets the info on a color hex
     *
     * @param colorHex - Color hex | must start with "#" (Example: "#87ceeb")
     *
     * @returns color hex info
     */
    getColor(colorHex: string): Promise<any>;
    /**
     * Gets the text and make it a mocked text
     *
     * @param text The text you wish to mock
     * @returns Mocked text (Example: "tHis ApI Is bAd")
     */
    mockText(text: string): Promise<any>;
    /**
     * Gets info of a meme from reddit
     *
     * @returns meme in a json file
     */
    getMeme(): Promise<any>;
    /**
     * Gets answers from an 8ball api
     *
     * @returns the answer
     */
    eightBall(): Promise<any>;
    /**
     * Reverses the text given (Example: "Utilia" = "ailitU")
     *
     * @param text Text you wish to reverse
     * @returns Reversed text
     */
    reverseText(text: string): Promise<any>;
    /**
     * Gets info of an app from Playstore
     *
     * @param app App you wish to search
     * @returns App info
     */
    getPlaystoreApp(app: string): Promise<any>;
    /**
     * Gets info of a song from Itunes
     *
     * @param song song you wish to search
     * @returns song info
     */
    getItunesMusic(song: string): Promise<any>;
    /**
     * Convert your text into the doublestruck font
     *
     * @param text Text you wish to convert
     * @returns Doublestruck text
     */
    doublestruck(text: string): Promise<any>;
    /**
     * Converts provided text to morse code
     *
     * @param text Text you wish to convert
     * @returns Morse code
     */
    textToMorse(text: string): Promise<any>;
    /**
     * Gets a would you rather question and outputs 2 options
     *
     * @returns Two options
     */
    wyr(): Promise<any>;
    /**
     * Shorten a url with TinyURL
     *
     *
     * @param url Url you wish to shorten
     * @param alias alias The custom alias for the shortened url.
     * @returns tinyurl URL
     */
    tinyUrl({ url, alias }: {
        url: string;
        alias: string;
    }): Promise<string>;
}
