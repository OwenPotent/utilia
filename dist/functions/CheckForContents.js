"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForContents = void 0;
const fs_1 = __importDefault(require("fs"));
/**
 * Check if a file or directory exists.
 *
 * @param file The file or directory to check.
 * @returns
 */
function checkForContents(file) {
    const contents = fs_1.default.readFileSync(file, 'utf8');
    return contents.length > 0;
}
exports.checkForContents = checkForContents;
