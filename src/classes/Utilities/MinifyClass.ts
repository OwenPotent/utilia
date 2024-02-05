import * as fs from 'fs';

interface MinifyOptions {
    removeWhitespace?: boolean;
    removeComments?: boolean;
    combineFiles?: boolean;
}

/**
 * Class responsible for minifying files by removing whitespace and comments.
 */
export class FileMinifier {
    /**
     * Creates an instance of FileMinifier.
     * @param filePaths - The paths to the files to be minified.
     * @param options - The options for minifying files.
     */
    constructor(private filePaths: string[], private options: MinifyOptions = {}) {}

    /**
     * Minifies the files based on the provided options.
     * @param outputFilePath - The path to the output file.
     */
    minify(outputFilePath: string): void {
        try {
            let combinedContents = '';
            const importedFiles: string[] = [];

            for (const filePath of this.filePaths) {
                // Read the file contents
                const fileContents = fs.readFileSync(filePath, 'utf-8');

                // Apply minification options
                let minifiedContents = fileContents;
                if (this.options.removeComments) {
                    minifiedContents = minifiedContents.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
                }
                if (this.options.removeWhitespace) {
                    minifiedContents = minifiedContents.replace(/\s+/g, '');
                }

                // Check for overlapping stuff and imports
                const imports = minifiedContents.match(/import\s.*?from\s['"].*?['"]/g);
                if (imports && this.options.combineFiles) {
                    for (const importStatement of imports) {
                        const importedFile = importStatement.match(/['"].*?['"]/);
                        if (importedFile) {
                            const importedFilePath = importedFile[0].replace(/['"]/g, '');
                            if (!importedFiles.includes(importedFilePath)) {
                                importedFiles.push(importedFilePath);
                                const importedFileContents = fs.readFileSync(importedFilePath, 'utf-8');
                                combinedContents += importedFileContents;
                            }
                        }
                    }
                }
                combinedContents += minifiedContents;
            }

            // Write the combined minified contents to the output file
            fs.writeFileSync(outputFilePath, combinedContents, 'utf-8');

            console.log('Files minified and combined successfully!');
        } catch (error) {
            console.error('Error while minifying files:', error);
        }
    }
}