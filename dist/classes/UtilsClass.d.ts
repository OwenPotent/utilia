import * as mongoose from "mongoose";
export declare class Utils {
    /**
     * shortens a text given
     *
     * @param text Text you wish to shorten
     * @param maxLen max length of text (Default is 2000)
     *
     * @returns
     */
    shorten(text: string, maxLen?: number): string;
    /**
     * Generates a random number
     *
     * @param min Minimum amount of number (Default is 1)
     * @param max Maximum amount of number (Default is 100)
     * @returns random number
     */
    randomNumber(min?: number, max?: number): number;
    /**
     * shuffles an array given
     *
     * @param array Array you wish to shuffle
     * @returns
     */
    shuffleArray(array: string[]): string[];
    /**
     * Removes duplicated strings in an array
     *
     * @param array Array you wish to remove duplicates
     * @returns A new array with no duplicates
     */
    removeDuplicated(array: string[]): string[];
    /**
     * Converts an array into a string and lists out the values
     *
     * @param array Array you wish to list
     * @param conjuction Default is "and"
     * @returns
     */
    list(array: string[], conjuction?: string): string;
    /**
     * sorts an array accordingly
     *
     * @param array Array you wish to sort
     * @returns
     */
    sort(array: string[]): string[];
    /**
     * Returns your string with the first letter on each word uppercased
     *
     * @param text string you want to change
     * @param split default is " "
     * @returns
     */
    firstUpperCase(text: string, split?: string): string;
    /**
     * Formats a number into the currect digits
     *
     * @param number Number you wish to format
     * @param minimumFractionDigits Minimum fraction of digits to convert to (Default is 0)
     * @returns
     */
    formatNumber(number: string, minimumFractionDigits?: number): string;
    /**
     *
     * @param text Text you wish to create a hash with
     * @param algorithm Default is sha256
     * @returns
     */
    createHash(text: string, algorithm?: string): string;
    /**
     * Formats bytes digits into multiple types of bytes (KB, MB, GB, TB...)
     *
     * @param bytes Number of bytes(B)
     * @returns
     */
    formatBytes(bytes: number): string;
    /**
     * Creates an id of string
     *
     * @param length Length of id
     * @returns
     */
    createId(length?: number): string;
    /**
     * Formats the unicode into easy to read interface
     *
     * @param unicode Unicode digits
     * @returns
     */
    formatDays(unicode: number): string;
    /**
     * Connects to the MongoDB Uri
     *
     * @param url Your MongoDB Uri
     * @returns
     */
    mongoConnect(url: string): Promise<typeof mongoose>;
    private isUpperCase;
    /**
     * Converts your string into a cipher
     *
     * @param text Text you wish to cipher
     * @param key Number of key
     * @returns
     */
    ceaserCipher(text: string, key?: number): string;
}
