"use strict";
/**
 *
 * Generates a password for you
 *
 * @param length Length of the password
 * @returns password output
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.genPin = exports.generatePassword = void 0;
function generatePassword(length) {
    let randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
    }
    ;
    return result;
}
exports.generatePassword = generatePassword;
/**
 *
 * @param length Length of the pin
 *
 * @returns Pin output
 */
function genPin(length) {
    let numbers = "01234567890";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    ;
    return result;
}
exports.genPin = genPin;
