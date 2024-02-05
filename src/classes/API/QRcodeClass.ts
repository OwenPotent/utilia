export class QRCode {
    private _data: string = "";

    private readonly DEFAULT_PARAMETERS = {
        size: 250,
        backgroundColor: "38-38-38",
        qrColor: "255-255-255",
        padding: 2
    };

    constructor(parameters: { data: string }) {
        if (!parameters || !parameters.data) {
            throw new Error("Invalid parameters. 'data' is required.");
        }

        this._data = parameters.data;
    }

    /**
     * Generates the QR code link
     * @returns The QR code link
     */
    public genQR(): string {
        const param = `size=${this.DEFAULT_PARAMETERS.size}&bgcolor=${this.DEFAULT_PARAMETERS.backgroundColor}&color=${this.DEFAULT_PARAMETERS.qrColor}&qzone=${this.DEFAULT_PARAMETERS.padding}&data=${this._data}`;

        const img = this.generateQRCode(param);

        return img;
    }

    /**
     * Encapsulates the API call to generate the QR code
     * @param param The query parameters for the API call
     * @returns The QR code image URL
     */
    private generateQRCode(param: string): string {
        return `https://api.qrserver.com/v1/create-qr-code/?${param}`;
    }
}