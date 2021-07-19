"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    constructor(options) {
        if (options.useDefault) {
            this._useDefault = options.useDefault;
        }
        if (options.useCustomLabel) {
            if (options.useDefault) {
                throw new Error("Utilia: You are using the default configuration for the logger! Disable that to be able to use custom config!");
            }
            else {
                this._useCustomLabel = options.useCustomLabel;
            }
        }
    }
    ResolveChalkColor(color, content) {
        if (color === "DEFAULT") {
            return chalk_1.default.whiteBright(content);
        }
        if (color === "BLUE") {
            return chalk_1.default.blueBright(content);
        }
        if (color === "RED") {
            return chalk_1.default.redBright(content);
        }
        if (color === "GREEN") {
            return chalk_1.default.greenBright(content);
        }
        if (color === "WHITE") {
            return chalk_1.default.whiteBright(content);
        }
        if (color === "YELLOW") {
            return chalk_1.default.yellowBright(content);
        }
    }
    /**
     * Prints out a "ready" log to the console
     * @param confirmBlueify Whether you want the message to be blue colored
     */
    ready(content, confirmBlueify) {
        var _a;
        let readySymbol;
        let blueify = chalk_1.default.blue;
        if ((_a = this._useCustomLabel) === null || _a === void 0 ? void 0 : _a.ready) {
            readySymbol = this.ResolveChalkColor("BLUE", this._useCustomLabel.ready);
        }
        else {
            readySymbol = this.ResolveChalkColor("BLUE", this._defaultOptions.symbols.ready);
        }
        if (confirmBlueify) {
            if (typeof confirmBlueify !== "boolean") {
                throw new TypeError("Utilia: \"confirmBlueify\" was not a type of boolean");
            }
            else {
                blueify(content);
            }
        }
        return console.log(`${readySymbol} | ${content}`);
    }
    /**
     * Prints out a "warn" log to the console
     * @param confirmYellowify Whether you want the content given to be yellow colored
     */
    warn(content, confirmYellowify) {
        var _a;
        let warnSymbol;
        let yellowify = chalk_1.default.yellow;
        if ((_a = this._useCustomLabel) === null || _a === void 0 ? void 0 : _a.warn) {
            warnSymbol = this.ResolveChalkColor("YELLOW", this._useCustomLabel.warn);
        }
        else {
            warnSymbol = this.ResolveChalkColor("YELLOW", this._defaultOptions.symbols.warn);
        }
        if (confirmYellowify) {
            yellowify(content);
        }
        return console.log(`${warnSymbol} | ${content}`);
    }
    /**
     * Prints out a "error" log to the console
     * @param confirmRedify Whether you want the content given to be red colored
     */
    error(content, confirmRedify) {
        var _a;
        let errorSymbol;
        let redify = chalk_1.default.red;
        if ((_a = this._useCustomLabel) === null || _a === void 0 ? void 0 : _a.error) {
            errorSymbol = this.ResolveChalkColor("RED", this._useCustomLabel.error);
        }
        else {
            errorSymbol = this.ResolveChalkColor("RED", this._defaultOptions.symbols.error);
        }
        if (confirmRedify) {
            redify(content);
        }
        return console.log(`${errorSymbol} | ${content}`);
    }
    /**
     * Prints out a "success" log to the console
     * @param confirmGreenify Whether you want the content given to be green colored
     */
    success(content, confirmGreenify) {
        var _a;
        let successSymbol;
        let greenify = chalk_1.default.green;
        if ((_a = this._useCustomLabel) === null || _a === void 0 ? void 0 : _a.success) {
            successSymbol = this.ResolveChalkColor("GREEN", this._useCustomLabel.success);
        }
        else {
            successSymbol = this.ResolveChalkColor("GREEN", this._defaultOptions.symbols.success);
        }
        if (confirmGreenify) {
            greenify(content);
        }
        return console.log(`${successSymbol} | ${content}`);
    }
}
exports.Logger = Logger;
