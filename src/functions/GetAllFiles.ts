import fs from 'fs';
import path from 'path';

interface getAllFilesOptions {
    includeExtensions?: string[];
    excludeExtensions?: string[];
}

/**
 * Get all files in a directory
 * 
 * @param dir The directory to search
 * @param options Options for the search
 * @returns An array of files
 */
export function getAllFiles(
    dir: string,
    options: getAllFilesOptions = {},
): string[] {
    const { includeExtensions = [], excludeExtensions = [] } = options;
    const files = fs.readdirSync(dir);
    const result: string[] = [];
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            result.push(...getAllFiles(filePath, options));
        } else {
            const ext = path.extname(file);
            if (
                includeExtensions.length === 0 ||
                includeExtensions.includes(ext)
            ) {
                if (excludeExtensions.length === 0 || !excludeExtensions.includes(ext)) {
                    result.push(filePath);
                }
            }
        }
    });
    return result;
}