"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    _useDefault;
    _useCustomLabel;
    _defaultOptions;
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
    resolveChalkColor(color, content) {
        switch (color) {
            case "DEFAULT":
                return chalk_1.default.whiteBright(content);
            case "BLUE":
                return chalk_1.default.blueBright(content);
            case "RED":
                return chalk_1.default.redBright(content);
            case "GREEN":
                return chalk_1.default.greenBright(content);
            case "WHITE":
                return chalk_1.default.whiteBright(content);
            case "YELLOW":
                return chalk_1.default.yellowBright(content);
        }
    }
    /**
     * Prints out a "ready" log to the console
     * @param confirmBlueify Whether you want the message to be blue colored
     */
    ready(content, confirmBlueify) {
        let readySymbol;
        const blueify = chalk_1.default.blue;
        if (this._useCustomLabel?.ready) {
            readySymbol = this.resolveChalkColor("BLUE", this._useCustomLabel.ready);
        }
        else {
            readySymbol = this.resolveChalkColor("BLUE", this._defaultOptions.symbols.ready);
        }
        if (confirmBlueify) {
            if (typeof confirmBlueify !== "boolean") {
                throw new TypeError("Utilia: \"confirmBlueify\" was not a type of boolean");
            }
            else {
                blueify(content);
            }
        }
        console.log(`${readySymbol} | ${content}`);
    }
    /**
     * Prints out a "warn" log to the console
     * @param confirmYellowify Whether you want the content given to be yellow colored
     */
    warn(content, confirmYellowify) {
        let warnSymbol;
        const yellowify = chalk_1.default.yellow;
        if (this._useCustomLabel?.warn) {
            warnSymbol = this.resolveChalkColor("YELLOW", this._useCustomLabel.warn);
        }
        else {
            warnSymbol = this.resolveChalkColor("YELLOW", this._defaultOptions.symbols.warn);
        }
        if (confirmYellowify) {
            yellowify(content);
        }
        console.log(`${warnSymbol} | ${content}`);
    }
    /**
     * Prints out a "error" log to the console
     * @param confirmRedify Whether you want the content given to be red colored
     */
    error(content, confirmRedify) {
        let errorSymbol;
        const redify = chalk_1.default.red;
        if (this._useCustomLabel?.error) {
            errorSymbol = this.resolveChalkColor("RED", this._useCustomLabel.error);
        }
        else {
            errorSymbol = this.resolveChalkColor("RED", this._defaultOptions.symbols.error);
        }
        if (confirmRedify) {
            redify(content);
        }
        console.log(`${errorSymbol} | ${content}`);
    }
    /**
     * Prints out a "success" log to the console
     * @param confirmGreenify Whether you want the content given to be green colored
     */
    success(content, confirmGreenify) {
        let successSymbol;
        const greenify = chalk_1.default.green;
        if (this._useCustomLabel?.success) {
            successSymbol = this.resolveChalkColor("GREEN", this._useCustomLabel.success);
        }
        else {
            successSymbol = this.resolveChalkColor("GREEN", this._defaultOptions.symbols.success);
        }
        if (confirmGreenify) {
            greenify(content);
        }
        console.log(`${successSymbol} | ${content}`);
    }
}
exports.Logger = Logger;
