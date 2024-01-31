export declare class Api {
    private _url;
    /**
     * Gives you a joke
     *
     * @returns A joke from the API
     */
    getJoke(): Promise<any>;
    /**
     * Encodes a string or word
     *
     * @param text The text you wish to encode
     * @returns Binary code
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
     * @returns Color hex info
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
     * Gets info of a meme from Reddit
     *
     * @returns Meme in a JSON file
     */
    getMeme(): Promise<any>;
    /**
     * Gets answers from an 8ball API
     *
     * @returns The answer
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
     * Gets info of a song from iTunes
     *
     * @param song Song you wish to search
     * @returns Song info
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
     * Converts provided text to Morse code
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
}
