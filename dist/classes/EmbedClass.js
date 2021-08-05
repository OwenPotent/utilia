"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embedder = void 0;
// TODO: Create custom embed class
// ! Embedder not useable!
class Embedder {
    constructor(options) {
        if (options.useBoldInDescription) {
            this._useCodeblockInDescription = options.useBoldInDescription;
        }
        if (options.useBoldInDescription) {
            this._useBoldInDescription = options.useBoldInDescription;
        }
        if (options.useTimestamp) {
            this._useTimestamp = options.useTimestamp;
        }
    }
}
exports.Embedder = Embedder;
