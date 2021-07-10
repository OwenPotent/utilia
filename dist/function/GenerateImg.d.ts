import { ImageApiEndpoints } from "../custom/types/ImageApiEndpoints";
/**
 *
 * Generates an image from the given image type
 *
 * @example
 * const { generateImg } = require("utilia")
 *
 * const img = generateImg("cat")
 * console.log(img)
 *
 * @returns
 */
export declare function generateImg(imageType: ImageApiEndpoints): Promise<void>;
