/**
 * 
 * Generates a password for you
 * 
 * @param length Length of the password
 * @returns password output
 */

export function generatePassword(length: number) {
    let randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
        result += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length))
    };

    return result;
}


/**
 * 
 * @param length Length of the pin
 * 
 * @returns Pin output
 */

export function genPin(length: number) {
    let numbers = "01234567890";
    let result = "";

    for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length))
    };

    return result
}