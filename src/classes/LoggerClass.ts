import chalk from "chalk";
import { loggerOptions } from "../types/types";
import { LoggerColors } from "../constants/constants";

export class Logger {
    private _useDefault?: boolean | true
    private _useCustomLabel?: {
        ready?: string,
        error?: string,
        warn?: string,
        success?: string
    }
    private _defaultOptions!: {
        symbols: {
            ready: "⭕️",
            error: "✖",
            warn: "❗",
            success: "✔"
        }
    }

    constructor(options: loggerOptions) {
        if (options.useDefault) {
            this._useDefault = options.useDefault
        }

        if (options.useCustomLabel) {
            if (options.useDefault) {
                throw new Error("Utilia: You are using the default configuration for the logger! Disable that to be able to use custom config!")
            } else {
                this._useCustomLabel = options.useCustomLabel
            }
        }
    }

    private ResolveChalkColor(color: LoggerColors, content: any) {
        if (color === "DEFAULT") {
            return chalk.whiteBright(content)
        }

        if (color === "BLUE") {
            return chalk.blueBright(content)
        }

        if (color === "RED") {
            return chalk.redBright(content)
        }

        if (color === "GREEN") {
            return chalk.greenBright(content)
        }

        if (color === "WHITE") {
            return chalk.whiteBright(content)
        }

        if (color === "YELLOW") {
            return chalk.yellowBright(content)
        }
    }

    /**
     * Prints out a "ready" log to the console
     * @param confirmBlueify Whether you want the message to be blue colored
     */

    public ready(content: any, confirmBlueify?: boolean) {

        let readySymbol: string | undefined;

        let blueify = chalk.blue

        if (this._useCustomLabel?.ready) {
            readySymbol = this.ResolveChalkColor("BLUE", this._useCustomLabel.ready);
        } else {
            readySymbol = this.ResolveChalkColor("BLUE", this._defaultOptions.symbols.ready)
        }

        if (confirmBlueify) {
            if (typeof confirmBlueify !== "boolean") {
                throw new TypeError("Utilia: \"confirmBlueify\" was not a type of boolean")
            } else {
                blueify(content);
            }
        }

        return console.log(`${readySymbol} | ${content}`)
    }

    /**
     * Prints out a "warn" log to the console
     * @param confirmYellowify Whether you want the content given to be yellow colored
     */
    public warn(content: any, confirmYellowify?: boolean) {
        let warnSymbol: string | undefined;

        let yellowify = chalk.yellow

        if (this._useCustomLabel?.warn) {
            warnSymbol = this.ResolveChalkColor("YELLOW", this._useCustomLabel.warn)
        } else {
            warnSymbol = this.ResolveChalkColor("YELLOW", this._defaultOptions.symbols.warn)
        }

        if (confirmYellowify) {
            yellowify(content)
        }

        return console.log(`${warnSymbol} | ${content}`);
    }

    /**
     * Prints out a "error" log to the console
     * @param confirmRedify Whether you want the content given to be red colored
     */
    public error(content: any, confirmRedify: boolean) {
        let errorSymbol: string | undefined;

        let redify = chalk.red

        if (this._useCustomLabel?.error) {
            errorSymbol = this.ResolveChalkColor("RED", this._useCustomLabel.error)
        } else {
            errorSymbol = this.ResolveChalkColor("RED", this._defaultOptions.symbols.error)
        }

        if (confirmRedify) {
            redify(content)
        }

        return console.log(`${errorSymbol} | ${content}`)
    }

    /**
     * Prints out a "success" log to the console
     * @param confirmGreenify Whether you want the content given to be green colored
     */
    public success(content: any, confirmGreenify: boolean) {
        let successSymbol: string | undefined

        let greenify = chalk.green

        if (this._useCustomLabel?.success) {
            successSymbol = this.ResolveChalkColor("GREEN", this._useCustomLabel.success)
        } else {
            successSymbol = this.ResolveChalkColor("GREEN", this._defaultOptions.symbols.success)
        }

        if (confirmGreenify) {
            greenify(content)
        }

        return console.log(`${successSymbol} | ${content}`)
    }
}