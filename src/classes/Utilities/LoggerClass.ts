import chalk from "chalk";
import { loggerOptions } from "../../types/types";
import { LoggerColors } from "../../constants/constants";

/**
 * Logger class for printing logs with different colors and symbols.
 */
export class Logger {
    private _useDefault?: boolean | true;
    private _useCustomLabel?: {
        ready?: string;
        error?: string;
        warn?: string;
        success?: string;
    };
    private _defaultOptions!: {
        symbols: {
            ready: "⭕️";
            error: "✖";
            warn: "❗";
            success: "✔";
        };
    };

    /**
     * Creates a new instance of the Logger class.
     * @param options The options for configuring the logger.
     */
    constructor(options: loggerOptions) {
        if (options.useDefault) {
            this._useDefault = options.useDefault;
        }

        if (options.useCustomLabel) {
            if (options.useDefault) {
                throw new Error("Utilia: You are using the default configuration for the logger! Disable that to be able to use custom config!");
            } else {
                this._useCustomLabel = options.useCustomLabel;
            }
        }
    }

    /**
     * Resolves the chalk color based on the LoggerColors enum.
     * @param color The color to resolve.
     * @param content The content to apply the color to.
     * @returns The content with the resolved color.
     */
    private resolveChalkColor(color: LoggerColors, content: any) {
        switch (color) {
            case "DEFAULT":
                return chalk.whiteBright(content);
            case "BLUE":
                return chalk.blueBright(content);
            case "RED":
                return chalk.redBright(content);
            case "GREEN":
                return chalk.greenBright(content);
            case "WHITE":
                return chalk.whiteBright(content);
            case "YELLOW":
                return chalk.yellowBright(content);
        }
    }

    /**
     * Prints out a "ready" log to the console.
     * @param content The content to print.
     * @param confirmBlueify Whether to apply blue color to the content.
     */
    public ready(content: any, confirmBlueify?: boolean) {
        let readySymbol: string | undefined;
        const blueify = chalk.blue;

        if (this._useCustomLabel?.ready) {
            readySymbol = this.resolveChalkColor("BLUE", this._useCustomLabel.ready);
        } else {
            readySymbol = this.resolveChalkColor("BLUE", this._defaultOptions.symbols.ready);
        }

        if (confirmBlueify) {
            if (typeof confirmBlueify !== "boolean") {
                throw new TypeError("Utilia: \"confirmBlueify\" was not a type of boolean");
            } else {
                blueify(content);
            }
        }

        console.log(`${readySymbol} | ${content}`);
    }

    /**
     * Prints out a "warn" log to the console.
     * @param content The content to print.
     * @param confirmYellowify Whether to apply yellow color to the content.
     */
    public warn(content: any, confirmYellowify?: boolean) {
        let warnSymbol: string | undefined;
        const yellowify = chalk.yellow;

        if (this._useCustomLabel?.warn) {
            warnSymbol = this.resolveChalkColor("YELLOW", this._useCustomLabel.warn);
        } else {
            warnSymbol = this.resolveChalkColor("YELLOW", this._defaultOptions.symbols.warn);
        }

        if (confirmYellowify) {
            yellowify(content);
        }

        console.log(`${warnSymbol} | ${content}`);
    }

    /**
     * Prints out an "error" log to the console.
     * @param content The content to print.
     * @param confirmRedify Whether to apply red color to the content.
     */
    public error(content: any, confirmRedify?: boolean) {
        let errorSymbol: string | undefined;
        const redify = chalk.red;

        if (this._useCustomLabel?.error) {
            errorSymbol = this.resolveChalkColor("RED", this._useCustomLabel.error);
        } else {
            errorSymbol = this.resolveChalkColor("RED", this._defaultOptions.symbols.error);
        }

        if (confirmRedify) {
            redify(content);
        }

        console.log(`${errorSymbol} | ${content}`);
    }

    /**
     * Prints out a "success" log to the console.
     * @param content The content to print.
     * @param confirmGreenify Whether to apply green color to the content.
     */
    public success(content: any, confirmGreenify?: boolean) {
        let successSymbol: string | undefined;
        const greenify = chalk.green;

        if (this._useCustomLabel?.success) {
            successSymbol = this.resolveChalkColor("GREEN", this._useCustomLabel.success);
        } else {
            successSymbol = this.resolveChalkColor("GREEN", this._defaultOptions.symbols.success);
        }

        if (confirmGreenify) {
            greenify(content);
        }

        console.log(`${successSymbol} | ${content}`);
    }
}