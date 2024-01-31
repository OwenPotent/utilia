/**
 * Represents a table with headers and rows.
 */
declare class Table {
    private headers;
    private rows;
    /**
     * Creates a new instance of the Table class.
     * @param headers - The headers of the table.
     */
    constructor(headers: string[]);
    /**
     * Adds a row to the table.
     * @param row - The row to be added.
     */
    addRow(row: string[]): void;
    /**
     * Logs the table to the console.
     */
    logTable(): void;
    /**
     * Formats a row with proper padding.
     * @param row - The row to be formatted.
     * @param maxLengths - The maximum lengths of each column.
     * @returns The formatted row.
     */
    private formatRow;
    /**
     * Gets the number of rows in the table.
     * @returns The number of rows.
     */
    getRowCount(): number;
    /**
     * Gets the number of columns in the table.
     * @returns The number of columns.
     */
    getColumnCount(): number;
    /**
     * Clears all rows from the table.
     */
    clearTable(): void;
}
export default Table;
