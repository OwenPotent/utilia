"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCode = void 0;
class QRCode {
    _data = "";
    parametersJson = {
        size: 250, // Size of Qr Code
        backgroundColor: "38-38-38", // Background Color Of Qr Code (In RGB)
        qrColor: "255-255-255", // Color of Qr Code (In RGB)
        padding: 2, // Padding
    };
    constructor(parameters) {
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
