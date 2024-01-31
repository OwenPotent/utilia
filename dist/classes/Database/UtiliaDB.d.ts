/**
 * The UtiliaDB class represents a simple key-value database.
 * It provides methods for inserting, finding, updating, deleting, and filtering data.
 * The data is stored in a JSON file specified by the filePath parameter.
 * The logger parameter is used for logging database operations.
 */
export default class UtiliaDB {
    private data;
    private filePath;
    private logger;
    /**
     * Constructs a new UtiliaDB instance.
     * @param filePath The path to the JSON file where the data will be stored.
     * @param logger The logger instance used for logging database operations.
     */
    constructor(filePath: string, logger: Logger);
    /**
     * Inserts a key-value pair into the database.
     * @param key The key of the data.
     * @param value The value of the data.
     */
    insert(key: string, value: any): void;
    /**
     * Finds the value associated with the specified key in the database.
     * @param key The key to search for.
     * @returns The value associated with the key, or undefined if the key does not exist.
     */
    find(key: string): any;
    /**
     * Updates the value associated with the specified key in the database.
     * @param key The key to update.
     * @param value The new value.
     * @throws Error if the key does not exist in the database.
     */
    update(key: string, value: any): void;
    /**
     * Deletes the key-value pair associated with the specified key from the database.
     * @param key The key to delete.
     * @throws Error if the key does not exist in the database.
     */
    delete(key: string): void;
    /**
     * Filters the data in the database based on a predicate function.
     * @param predicate A function that takes a value and a key and returns a boolean indicating whether the value should be included in the result.
     * @returns An array of values that satisfy the predicate.
     */
    filter(predicate: (value: any, key: string) => boolean): any[];
    /**
     * Creates a backup of the database by saving the data to a JSON file.
     * @param backupFilePath The path to the backup file.
     */
    createBackup(backupFilePath: string): void;
    /**
     * Removes the database file.
     */
    removeDatabase(): void;
    /**
     * Saves the data to the JSON file.
     * This is a private helper method and should not be called directly.
     */
    private saveToFile;
}
/**
 * The Logger class provides logging functionality for the UtiliaDB class.
 * It supports logging messages with different log levels.
 */
declare class Logger {
    /**
     * Logs a message with the 'log' log level.
     * @param message The message to log.
     */
    log(message: string): void;
    /**
     * Logs a message with the 'error' log level.
     * @param message The message to log.
     */
    error(message: string): void;
    /**
     * Logs a message with the 'warn' log level.
     * @param message The message to log.
     */
    warn(message: string): void;
    /**
     * Logs a message with the 'info' log level.
     * @param message The message to log.
     */
    info(message: string): void;
    /**
     * Logs a message with the 'debug' log level.
     * @param message The message to log.
     */
    debug(message: string): void;
    /**
     * Starts a timer with the specified label.
     * @param label The label for the timer.
     */
    time(label: string): void;
    /**
     * Stops the timer with the specified label and logs the elapsed time.
     * @param label The label of the timer to stop.
     */
    timeEnd(label: string): void;
    /**
     * Formats a time duration in milliseconds to a human-readable string.
     * @param time The time duration in milliseconds.
     * @returns A formatted string representing the time duration.
     */
    formatTime(time: number): string;
}
export {};
