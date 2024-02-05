"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
/**
 * Class responsible for minifying files by removing whitespace and comments.
 */
class FileMinifier {
    filePaths;
    options;
    /**
     * Creates an instance of FileMinifier.
     * @param filePaths - The paths to the files to be minified.
     * @param options - The options for minifying files.
     */
    constructor(filePaths, options = {}) {
        this.filePaths = filePaths;
        this.options = options;
    }
    /**
     * Minifies the files based on the provided options.
     * @param outputFilePath - The path to the output file.
     */
    minify(outputFilePath) {
        try {
            let combinedContents = '';
            const importedFiles = [];
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
        }
        catch (error) {
            console.error('Error while minifying files:', error);
        }
    }
}
