import crypto from "crypto"
import * as mongoose from "mongoose"

export class Utils {
    public shorten(text: string, maxLen: number = 2000) {
        return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
    }

    public randomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public shuffleArray(array: string[]) {
        const arr = array.slice(0);
        for (let i = arr.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }

    public removeDuplicated(array: string[]) {
        return [...new Set(array)]
    }

    public list(array: string[], conjuction: string = "and") {
        const length = array.length;
        if (length === 0) return "";
        if (length === 1) return array[0];
        return `${array.slice(0, -1).join(', ')}${length > 1 ? `${length > 2 ? ',' : ''} ${conjuction} ` : ''}${array.slice(1)}`
    }

    public sort(array: string[]) {
        return array.sort((a, b) => {
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1
        })
    }

    public firstUpperCase(text: string, split: string = " ") {
        return text.split(split).map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ');
    }

    public formatNumber(number: string, minimumFractionDigits: number = 0) {
        return Number.parseFloat(number).toLocaleString(undefined, {
            minimumFractionDigits,
            maximumFractionDigits: 2
        });
    }

    public createHash(text: string, algorithm: string) {
        return crypto.createHash(algorithm).update(text).digest("hex")
    }

    public formatBytes(bytes: number) {
        if (bytes === 0) return `0 bytes`;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const b = Math.floor(Math.log(bytes) / Math.log(1024));
        return `${parseFloat((bytes / Math.pow(1024, b)).toFixed(2))} ${sizes[b]}`;
    }

    public createId(length: number = 4) {
        let results = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        const charactersLength = characters.length;

        for (let i = 0; i < length; i++) {
            results += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return results;
    }

    public formatDays(unicode: number) {
        let totalSeconds = (unicode / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 60 / 60 % 24);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    }

    public mongoConnect(url: string) {
        return mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    private isUpperCase(string: string) {
        return string === string.toUpperCase()
    }

    public ceaserCipher(text: string, key: number = 13): string {
        let decipher = ""

        for (let i = 0; i < text.length; i++) {
            if (this.isUpperCase(text[i])) {
                decipher += String.fromCharCode((text.charCodeAt(i) + key - 65) % 26 + 65);
            } else {
                decipher += String.fromCharCode((text.charCodeAt(i) + key - 97) % 26 + 97);
            }
        }

        return decipher;
    }
}