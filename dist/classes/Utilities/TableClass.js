"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
/**
 * Represents a table with headers and rows.
 */
class Table {
    headers;
    rows;
    /**
     * Creates a new instance of the Table class.
     * @param headers - The headers of the table.
     */
    constructor(headers) {
        this.headers = headers;
        this.rows = [];
    }
    /**
     * Adds a row to the table.
     * @param row - The row to be added.
     */
    addRow(row) {
        if (row.length !== this.headers.length) {
            throw new Error('Row length does not match the number of columns.');
        }
        this.rows.push(row);
    }
    /**
     * Logs the table to the console.
     */
    logTable() {
        // Calculate the maximum length of each column
        const maxLengths = this.headers.map((header, index) => {
            const column = [header, ...this.rows.map(row => row[index])];
            return Math.max(...column.map(item => item.length));
        });
        // Create a separator line using the maximum lengths
        const separator = maxLengths.map(length => '-'.repeat(length + 2));
        // Format the headers and rows
        const formattedHeaders = this.formatRow(this.headers, maxLengths);
        const formattedRows = this.rows.map(row => this.formatRow(row, maxLengths));
        // Log the table to the console
        console.log(formattedHeaders);
        console.log(separator.join(' '));
        formattedRows.forEach(row => console.log(row));
    }
    /**
     * Formats a row with proper padding.
     * @param row - The row to be formatted.
     * @param maxLengths - The maximum lengths of each column.
     * @returns The formatted row.
     */
    formatRow(row, maxLengths) {
        return row.map((item, index) => {
            const padding = maxLengths[index] - item.length;
            return ` ${item}${' '.repeat(padding)} `;
        }).join('|');
    }
    /**
     * Gets the number of rows in the table.
     * @returns The number of rows.
     */
    getRowCount() {
        return this.rows.length;
    }
    /**
     * Gets the number of columns in the table.
     * @returns The number of columns.
     */
    getColumnCount() {
        return this.headers.length;
    }
    /**
     * Clears all rows from the table.
     */
    clearTable() {
        this.rows = [];
    }
}
exports.Table = Table;
