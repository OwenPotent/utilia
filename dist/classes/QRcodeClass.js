"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCode = void 0;
let parametersJson = {
    "size": 250,
    "backgroundColor": "38-38-38",
    "qrColor": "255-255-255",
    "padding": 2,
    "data": "google.com"
};
class QRCode {
    static genQRCode(data) {
        parametersJson.data = "google.com" || data;
        let parameters = `size=${parametersJson.size}&bgcolor=${parametersJson.backgroundColor}&color=${parametersJson.qrColor}&qzone=${parametersJson.padding}&data=${parametersJson.data}`;
        let img = `https://api.qrserver.com/v1/create-qr-code/?${parameters}`;
        return img;
    }
}
exports.QRCode = QRCode;
