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
export declare function getAllFiles(dir: string, options?: getAllFilesOptions): string[];
export {};
