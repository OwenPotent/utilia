import fs from 'fs';
import chalk from 'chalk';
import ms from 'ms';

/**
 * The UtiliaDB class represents a simple key-value database.
 * It provides methods for inserting, finding, updating, deleting, and filtering data.
 * The data is stored in a JSON file specified by the filePath parameter.
 * The logger parameter is used for logging database operations.
 */
class UtiliaDB {
    private data: Record<string, any>;
    private filePath: string;
    private logger: Logger;

    /**
     * Constructs a new UtiliaDB instance.
     * @param filePath The path to the JSON file where the data will be stored.
     * @param logger The logger instance used for logging database operations.
     */
    constructor(filePath: string, logger: Logger) {
        this.data = {};
        this.filePath = filePath;
        this.logger = logger;
    }

    /**
     * Inserts a key-value pair into the database.
     * @param key The key of the data.
     * @param value The value of the data.
     */
    insert(key: string, value: any): void {
        this.data[key] = value;
        this.saveToFile();
        this.logger.log(`Inserted data with key '${key}' into the database.`);
    }

    /**
     * Finds the value associated with the specified key in the database.
     * @param key The key to search for.
     * @returns The value associated with the key, or undefined if the key does not exist.
     */
    find(key: string): any {
        return this.data[key];
    }

    /**
     * Updates the value associated with the specified key in the database.
     * @param key The key to update.
     * @param value The new value.
     * @throws Error if the key does not exist in the database.
     */
    update(key: string, value: any): void {
        if (this.data.hasOwnProperty(key)) {
            this.data[key] = value;
            this.saveToFile();
            this.logger.log(`Updated data with key '${key}' in the database.`);
        } else {
            throw new Error(`Key '${key}' does not exist in the database.`);
        }
    }

    /**
     * Deletes the key-value pair associated with the specified key from the database.
     * @param key The key to delete.
     * @throws Error if the key does not exist in the database.
     */
    delete(key: string): void {
        if (this.data.hasOwnProperty(key)) {
            delete this.data[key];
            this.saveToFile();
            this.logger.log(`Deleted data with key '${key}' from the database.`);
        } else {
            throw new Error(`Key '${key}' does not exist in the database.`);
        }
    }

    /**
     * Filters the data in the database based on a predicate function.
     * @param predicate A function that takes a value and a key and returns a boolean indicating whether the value should be included in the result.
     * @returns An array of values that satisfy the predicate.
     */
    filter(predicate: (value: any, key: string) => boolean): any[] {
        return Object.entries(this.data)
            .filter(([key, value]) => predicate(value, key))
            .map(([key, value]) => value);
    }

    /**
     * Creates a backup of the database by saving the data to a JSON file.
     * @param backupFilePath The path to the backup file.
     */
    createBackup(backupFilePath: string): void {
        const backupDataString = JSON.stringify(this.data);
        fs.writeFileSync(backupFilePath, backupDataString);
        this.logger.log(`Created backup of the database at '${backupFilePath}'.`);
    }

    /**
     * Removes the database file.
     */
    removeDatabase(): void {
        fs.unlinkSync(this.filePath);
        this.logger.log(`Removed database at '${this.filePath}'.`);
    }

    /**
     * Saves the data to the JSON file.
     * This is a private helper method and should not be called directly.
     */
    private saveToFile(): void {
        const dataString = JSON.stringify(this.data);
        fs.writeFileSync(this.filePath, dataString);
        this.logger.log(`Saved data to file at '${this.filePath}'.`);
    }
}

/**
 * The Logger class provides logging functionality for the UtiliaDB class.
 * It supports logging messages with different log levels.
 */
class Logger {
    /**
     * Logs a message with the 'log' log level.
     * @param message The message to log.
     */
    log(message: string): void {
        console.log(chalk.blue(`[Database] ${message}`));
    }

    /**
     * Logs a message with the 'error' log level.
     * @param message The message to log.
     */
    error(message: string): void {
        console.log(chalk.red(`[Database] ${message}`));
    }

    /**
     * Logs a message with the 'warn' log level.
     * @param message The message to log.
     */
    warn(message: string): void {
        console.log(chalk.yellow(`[Database] ${message}`));
    }

    /**
     * Logs a message with the 'info' log level.
     * @param message The message to log.
     */
    info(message: string): void {
        console.log(chalk.green(`[Database] ${message}`));
    }

    /**
     * Logs a message with the 'debug' log level.
     * @param message The message to log.
     */
    debug(message: string): void {
        console.log(chalk.gray(`[Database] ${message}`));
    }

    /**
     * Starts a timer with the specified label.
     * @param label The label for the timer.
     */
    time(label: string): void {
        console.time(label);
    }

    /**
     * Stops the timer with the specified label and logs the elapsed time.
     * @param label The label of the timer to stop.
     */
    timeEnd(label: string): void {
        console.timeEnd(label);
    }

    /**
     * Formats a time duration in milliseconds to a human-readable string.
     * @param time The time duration in milliseconds.
     * @returns A formatted string representing the time duration.
     */
    formatTime(time: number): string {
        return ms(time);
    }
}