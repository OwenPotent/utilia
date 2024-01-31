export declare class QRCode {
    private _data;
    private parametersJson;
    constructor(parameters: {
        data: string;
    });
    /**
     *
     * @returns the QRcode link
     */
    genQR(): string;
}
