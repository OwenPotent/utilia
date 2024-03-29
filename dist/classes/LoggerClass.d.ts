import { loggerOptions } from "../types/types";
export declare class Logger {
    private _useDefault?;
    private _useCustomLabel?;
    private _defaultOptions;
    constructor(options: loggerOptions);
    private resolveChalkColor;
    /**
     * Prints out a "ready" log to the console
     * @param confirmBlueify Whether you want the message to be blue colored
     */
    ready(content: any, confirmBlueify?: boolean): void;
    /**
     * Prints out a "warn" log to the console
     * @param confirmYellowify Whether you want the content given to be yellow colored
     */
    warn(content: any, confirmYellowify?: boolean): void;
    /**
     * Prints out a "error" log to the console
     * @param confirmRedify Whether you want the content given to be red colored
     */
    error(content: any, confirmRedify?: boolean): void;
    /**
     * Prints out a "success" log to the console
     * @param confirmGreenify Whether you want the content given to be green colored
     */
    success(content: any, confirmGreenify?: boolean): void;
}
