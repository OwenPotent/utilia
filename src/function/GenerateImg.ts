import axios from "axios";
import { catUrl, dogUrl, waifuUrl, nekoUrl } from "../config/url.json";
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

export async function generateImg(imageType: ImageApiEndpoints): Promise<void> {
    if (!imageType) throw new TypeError("Please specify an image type to generate the image!")

    switch (imageType) {
        case "cat":
            const cat = await axios.get(catUrl).then((res) => {
                return res.data.url
            }).catch((err) => {
                console.error(err)
            })

            if (!cat) {
                return console.error("Could not find any available data.")
            } else {
                return cat
            }
        case "dog":
            const dog = await axios.get(dogUrl).then((res) => {
                return res.data.url
            }).catch((err) => {
                console.error(err)
            })
            
            if (!dog) {
                return console.error("Could not find any available data.")
            } else {
                return dog
            }

        case "neko":
            const neko = await axios.get(nekoUrl).then((res) => {
                return res.data.url
            }).catch((err) => {
                console.error(err)
            })

            if (!neko) {
                return console.error("Could not find any available data.")
            } else {
                return neko
            }

        case "waifu":
            const waifu = await axios.get(waifuUrl).then((res) => {
                return res.data.url
            }).catch((err) => {
                console.error(err)
            })

            if (!waifu) {
                return console.error("Could not find any available data.")
            } else {
                return waifu
            }

        default: throw new Error("Please specify a correct type")
    }
}