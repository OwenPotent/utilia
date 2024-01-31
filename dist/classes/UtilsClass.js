"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const crypto_1 = __importDefault(require("crypto"));
class Utils {
    /**
     * shortens a text given
     *
     * @param text Text you wish to shorten
     * @param maxLen max length of text (Default is 2000)
     *
     * @returns
     */
    shorten(text, maxLen = 2000) {
        return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
    }
    /**
     * Generates a random number
     *
     * @param min Minimum amount of number (Default is 1)
     * @param max Maximum amount of number (Default is 100)
     * @returns random number
     */
    randomNumber(min = 1, max = 100) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * shuffles an array given
     *
     * @param array Array you wish to shuffle
     * @returns
     */
    shuffleArray(array) {
        const arr = array.slice(0);
        for (let i = arr.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
    /**
     * Removes duplicated strings in an array
     *
     * @param array Array you wish to remove duplicates
     * @returns A new array with no duplicates
     */
    removeDuplicated(array) {
        return [...new Set(array)];
    }
    /**
     * Converts an array into a string and lists out the values
     *
     * @param array Array you wish to list
     * @param conjuction Default is "and"
     * @returns
     */
    list(array, conjuction = "and") {
        const length = array.length;
        if (length === 0)
            return "";
        if (length === 1)
            return array[0];
        return `${array.slice(0, -1).join(', ')}${length > 1 ? `${length > 2 ? ',' : ''} ${conjuction} ` : ''}${array.slice(1)}`;
    }
    /**
     * sorts an array accordingly
     *
     * @param array Array you wish to sort
     * @returns
     */
    sort(array) {
        return array.sort((a, b) => {
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
        });
    }
    /**
     * Returns your string with the first letter on each word uppercased
     *
     * @param text string you want to change
     * @param split default is " "
     * @returns
     */
    firstUpperCase(text, split = " ") {
        return text.split(split).map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ');
    }
    /**
     * Formats a number into the currect digits
     *
     * @param number Number you wish to format
     * @param minimumFractionDigits Minimum fraction of digits to convert to (Default is 0)
     * @returns
     */
    formatNumber(number, minimumFractionDigits = 0) {
        return Number.parseFloat(number).toLocaleString(undefined, {
            minimumFractionDigits,
            maximumFractionDigits: 2
        });
    }
    /**
     *
     * @param text Text you wish to create a hash with
     * @param algorithm Default is sha256
     * @returns
     */
    createHash(text, algorithm = "sha256") {
        return crypto_1.default.createHash(algorithm).update(text).digest("hex");
    }
    /**
     * Formats bytes digits into multiple types of bytes (KB, MB, GB, TB...)
     *
     * @param bytes Number of bytes(B)
     * @returns
     */
    formatBytes(bytes) {
        if (bytes === 0)
            return `0 bytes`;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const b = Math.floor(Math.log(bytes) / Math.log(1024));
        return `${parseFloat((bytes / Math.pow(1024, b)).toFixed(2))} ${sizes[b]}`;
    }
    /**
     * Creates an id of string
     *
     * @param length Length of id
     * @returns
     */
    createId(length = 4) {
        let results = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            results += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return results;
    }
    /**
     * Formats the unicode into easy to read interface
     *
     * @param unicode Unicode digits
     * @returns
     */
    formatDays(unicode) {
        let totalSeconds = (unicode / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 60 / 60 % 24);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    }
    isUpperCase(string) {
        return string === string.toUpperCase();
    }
    /**
     * Converts your string into a cipher
     *
     * @param text Text you wish to cipher
     * @param key Number of key
     * @returns
     */
    ceaserCipher(text, key = 13) {
        let decipher = "";
        for (let i = 0; i < text.length; i++) {
            if (this.isUpperCase(text[i])) {
                decipher += String.fromCharCode((text.charCodeAt(i) + key - 65) % 26 + 65);
            }
            else {
                decipher += String.fromCharCode((text.charCodeAt(i) + key - 97) % 26 + 97);
            }
        }
        return decipher;
    }
}
exports.Utils = Utils;
