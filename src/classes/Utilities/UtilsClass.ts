import crypto from "crypto"

export class Utils {

    /**
     * shortens a text given
     * 
     * @param text Text you wish to shorten
     * @param maxLen max length of text (Default is 2000)
     * 
     * @returns 
     */
    public shorten(text: string, maxLen: number = 2000) {
        try {
            if (typeof text !== "string") {
                throw new Error("Text must be a string");
            }
            return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
        } catch (error) {
            console.error(error);
            return "";
        }
    }

    /**
     * Generates a random number
     * 
     * @param min Minimum amount of number (Default is 1)
     * @param max Maximum amount of number (Default is 100)
     * @returns random number
     */

    public randomNumber(min: number = 1, max: number = 100) {
        try {
            if (typeof min !== "number" || typeof max !== "number") {
                throw new Error("Min and max must be numbers");
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } catch (error) {
            console.error(error);
            return 0;
        }
    }

    /**
     * shuffles an array given
     * 
     * @param array Array you wish to shuffle
     * @returns 
     */

    public shuffleArray(array: string[]) {
        try {
            if (!Array.isArray(array)) {
                throw new Error("Array must be an array");
            }
            const arr = array.slice(0);
            for (let i = arr.length - 1; i >= 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            return arr;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    /**
     * Removes duplicated strings in an array
     * 
     * @param array Array you wish to remove duplicates
     * @returns A new array with no duplicates
     */
    public removeDuplicated(array: string[]) {
        try {
            if (!Array.isArray(array)) {
                throw new Error("Array must be an array");
            }
            return [...new Set(array)]
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    /**
     * Converts an array into a string and lists out the values
     * 
     * @param array Array you wish to list
     * @param conjuction Default is "and"
     * @returns 
     */

    public list(array: string[], conjuction: string = "and") {
        try {
            if (!Array.isArray(array)) {
                throw new Error("Array must be an array");
            }
            const length = array.length;
            if (length === 0) return "";
            if (length === 1) return array[0];
            return `${array.slice(0, -1).join(', ')}${length > 1 ? `${length > 2 ? ',' : ''} ${conjuction} ` : ''}${array.slice(1)}`
        } catch (error) {
            console.error(error);
            return "";
        }
    }

    /**
     * sorts an array accordingly
     * 
     * @param array Array you wish to sort
     * @returns 
     */

    public sort(array: string[]) {
        try {
            if (!Array.isArray(array)) {
                throw new Error("Array must be an array");
            }
            return array.sort((a, b) => {
                return a.toLowerCase() > b.toLowerCase() ? 1 : -1
            })
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    /**
     * Returns your string with the first letter on each word uppercased
     * 
     * @param text string you want to change
     * @param split default is " "
     * @returns 
     */

    public firstUpperCase(text: string, split: string = " ") {
        try {
            if (typeof text !== "string") {
                throw new Error("Text must be a string");
            }
            return text.split(split).map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ');
        } catch (error) {
            console.error(error);
            return "";
        }
    }

    /**
     * Formats a number into the currect digits
     * 
     * @param number Number you wish to format
     * @param minimumFractionDigits Minimum fraction of digits to convert to (Default is 0)
     * @returns 
     */

    public formatNumber(number: string, minimumFractionDigits: number = 0) {
        try {
            if (typeof number !== "string") {
                throw new Error("Number must be a string");
            }
            return Number.parseFloat(number).toLocaleString(undefined, {
                minimumFractionDigits,
                maximumFractionDigits: 2
            });
        } catch (error) {
            console.error(error);
            return "";
        }
    }

    /**
     * 
     * @param text Text you wish to create a hash with
     * @param algorithm Default is sha256
     * @returns 
     */

    public createHash(text: string, algorithm: string = "sha256") {
        try {
            if (typeof text !== "string") {
                throw new Error("Text must be a string");
            }
            return crypto.createHash(algorithm).update(text).digest("hex")
        } catch (error) {
            console.error(error);
            return "";
        }
    }

    /**
     * Formats bytes digits into multiple types of bytes (KB, MB, GB, TB...)
     * 
     * @param bytes Number of bytes(B)
     * @returns 
     */

    public formatBytes(bytes: number) {
        try {
            if (typeof bytes !== "number") {
                throw new Error("Bytes must be a number");
            }
            if (bytes === 0) return `0 bytes`;
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

            const b = Math.floor(Math.log(bytes) / Math.log(1024));
            return `${parseFloat((bytes / Math.pow(1024, b)).toFixed(2))} ${sizes[b]}`;
        } catch (error) {
            console.error(error);
            return "";
        }
    }

    /**
     * Creates an id of string
     * 
     * @param length Length of id
     * @returns 
     */

    public createId(length: number = 4) {
        try {
            if (typeof length !== "number") {
                throw new Error("Length must be a number");
            }
            let results = "";
            let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            const charactersLength = characters.length;

            for (let i = 0; i < length; i++) {
                results += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return results;
        } catch (error) {
            console.error(error);
            return "";
        }
    }

    /**
     * Formats the unicode into easy to read interface
     * 
     * @param unicode Unicode digits
     * @returns 
     */

    public formatDays(unicode: number) {
        try {
            if (typeof unicode !== "number") {
                throw new Error("Unicode must be a number");
            }
            let totalSeconds = (unicode / 1000);
            let days = Math.floor(totalSeconds / 86400);
            let hours = Math.floor(totalSeconds / 60 / 60 % 24);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        } catch (error) {
            console.error(error);
            return "";
        }
    }

    private isUpperCase(string: string) {
        return string === string.toUpperCase()
    }

    /**
     * Converts your string into a cipher
     * 
     * @param text Text you wish to cipher
     * @param key Number of key
     * @returns 
     */

    public ceaserCipher(text: string, key: number = 13): string {
        try {
            if (typeof text !== "string" || typeof key !== "number") {
                throw new Error("Text must be a string and key must be a number");
            }
            let decipher = ""

            for (let i = 0; i < text.length; i++) {
                if (this.isUpperCase(text[i])) {
                    decipher += String.fromCharCode((text.charCodeAt(i) + key - 65) % 26 + 65);
                } else {
                    decipher += String.fromCharCode((text.charCodeAt(i) + key - 97) % 26 + 97);
                }
            }

            return decipher;
        } catch (error) {
            console.error(error);
            return "";
        }
    }
}