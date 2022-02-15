"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * Get all files in a directory
 *
 * @param dir The directory to search
 * @param options Options for the search
 * @returns An array of files
 */
function getAllFiles(dir, options = {}) {
    const { includeExtensions = [], excludeExtensions = [] } = options;
    const files = fs_1.default.readdirSync(dir);
    const result = [];
    files.forEach((file) => {
        const filePath = path_1.default.join(dir, file);
        const stat = fs_1.default.statSync(filePath);
        if (stat.isDirectory()) {
            result.push(...getAllFiles(filePath, options));
        }
        else {
            const ext = path_1.default.extname(file);
            if (includeExtensions.length === 0 ||
                includeExtensions.includes(ext)) {
                if (excludeExtensions.length === 0 || !excludeExtensions.includes(ext)) {
                    result.push(filePath);
                }
            }
        }
    });
    return result;
}
exports.getAllFiles = getAllFiles;
