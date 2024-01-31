"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCode = void 0;
class QRCode {
    constructor(parameters) {
        this._data = "";
        this.parametersJson = {
            size: 250,
            backgroundColor: "38-38-38",
            qrColor: "255-255-255",
            padding: 2, // Padding
        };
        this._data = parameters.data;
    }
    /**
     *
     * @returns the QRcode link
     */
    genQR() {
        let param = `size=${this.parametersJson.size}&bgcolor=${this.parametersJson.backgroundColor}&color=${this.parametersJson.qrColor}&qzone=${this.parametersJson.padding}&data=${this._data}`;
        let img = `https://api.qrserver.com/v1/create-qr-code/?${param}`;
        return img;
    }
}
exports.QRCode = QRCode;
