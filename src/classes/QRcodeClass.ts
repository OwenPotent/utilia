let parametersJson = {
    "size": 250, // Size of Qr Code
    "backgroundColor": "38-38-38", // Background Color Of Qr Code (In RGB)
    "qrColor": "255-255-255", // Color of Qr Code (In RGB)
    "padding": 2, // Padding 
    "data": "google.com"
};

export class QRCode {
    static genQRCode(data: string) {

        parametersJson.data = "google.com" || data

        let parameters = `size=${parametersJson.size}&bgcolor=${parametersJson.backgroundColor}&color=${parametersJson.qrColor}&qzone=${parametersJson.padding}&data=${parametersJson.data}`
        
        let img = `https://api.qrserver.com/v1/create-qr-code/?${parameters}`

        return img
    }
}