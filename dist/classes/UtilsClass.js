"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const crypto_1 = __importDefault(require("crypto"));
const mongoose = __importStar(require("mongoose"));
class Utils {
    shorten(text, maxLen = 2000) {
        return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
    }
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
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
    removeDuplicated(array) {
        return [...new Set(array)];
    }
    list(array, conjuction = "and") {
        const length = array.length;
        if (length === 0)
            return "";
        if (length === 1)
            return array[0];
        return `${array.slice(0, -1).join(', ')}${length > 1 ? `${length > 2 ? ',' : ''} ${conjuction} ` : ''}${array.slice(1)}`;
    }
    sort(array) {
        return array.sort((a, b) => {
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
        });
    }
    firstUpperCase(text, split = " ") {
        return text.split(split).map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ');
    }
    formatNumber(number, minimumFractionDigits = 0) {
        return Number.parseFloat(number).toLocaleString(undefined, {
            minimumFractionDigits,
            maximumFractionDigits: 2
        });
    }
    createHash(text, algorithm) {
        return crypto_1.default.createHash(algorithm).update(text).digest("hex");
    }
    formatBytes(bytes) {
        if (bytes === 0)
            return `0 bytes`;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const b = Math.floor(Math.log(bytes) / Math.log(1024));
        return `${parseFloat((bytes / Math.pow(1024, b)).toFixed(2))} ${sizes[b]}`;
    }
    createId(length = 4) {
        let results = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            results += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return results;
    }
    formatDays(unicode) {
        let totalSeconds = (unicode / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 60 / 60 % 24);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    }
    mongoConnect(url) {
        return mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}
exports.Utils = Utils;
