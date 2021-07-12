type padding = "1" | "2" | "3" | "4" | "5"

export interface parameters {
    size?: number | 250,
    backgroundColor?: string | "38-38-38",
    qrColor?: string | "255-255-255",
    padding?: padding | "3",
    data: string
}
