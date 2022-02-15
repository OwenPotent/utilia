import fs from 'fs';
import path from 'path';

/**
 * Check if a file or directory exists.
 * 
 * @param file The file or directory to check.
 * @returns 
 */
export function checkForContents(file: string): boolean {
    const contents = fs.readFileSync(file, 'utf8');
    return contents.length > 0;
}