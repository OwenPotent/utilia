import { parameters } from "../types/types"

export class QRCode {

    private _data = ""

    private parametersJson = {
        "size": 250, // Size of Qr Code
        "backgroundColor": "38-38-38", // Background Color Of Qr Code (In RGB)
        "qrColor": "255-255-255", // Color of Qr Code (In RGB)
        "padding": 2, // Padding
    };

    constructor(parameters: parameters) {
        this._data = parameters.data
    }

    /**
     * 
     * @returns the QRcode link
     */

    public genQR() {
        let param = `size=${this.parametersJson.size}&bgcolor=${this.parametersJson.backgroundColor}&color=${this.parametersJson.qrColor}&qzone=${this.parametersJson.padding}&data=${this._data}`

        let img = `https://api.qrserver.com/v1/create-qr-code/?${param}`

        return img
    }

    // Unused code cause of error

    // static genQRCode(data: string) {

    //     this.parametersJson.data = "google.com" || data

    //     let parameters = `size=${this.parametersJson.size}&bgcolor=${this.parametersJson.backgroundColor}&color=${this.parametersJson.qrColor}&qzone=${this.parametersJson.padding}&data=${this.parametersJson.data}`
        
    //     let img = `https://api.qrserver.com/v1/create-qr-code/?${parameters}`

    //     return img
    // }
}