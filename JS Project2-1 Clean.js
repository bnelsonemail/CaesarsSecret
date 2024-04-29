






const alphabet = "abcdefghijklmnopqrstuvwxyz";


function encryptLetter (letter, shift) {
    const index = alphabet.indexOf(letter.toLowerCase());
    const alphabetLength = alphabet.length;
    const newIndex = (index + shift) % alphabetLength;
    const newLetter = alphabet [newIndex];
    return newLetter;
}

let encryptResult = encryptLetter ('B', 3);
console.log (`The encrypted letter is ${encryptResult}`);




function caesarMessage (message, shift) {
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        if (alphabet.includes(message)) {
            encryptedMessage += encryptLetter (message[i], shift);
        }
        else { 
            encryptedMessage += message [i];
        }
        
    }
    return encryptedMessage;
}

let encryptMessageResult = caesarMessage ('Garden', 3);
console.log (`The encrypted message is ${encryptMessageResult}`);




//              RANDOM SHIFT

const randomDecimal = Math.random();
const range = 33 - 3 + 1; // 31; This represents the randon shift value as discussed above b/w 3 and 33.
const randomInRange = randomDecimal * range; // Adjusts the range to get a number between 0 (inclusive) and the value of 'range' (exclusive).
const randomInt = Math.floor(randomInRange); // Convert the decimal number to an integer to get values between 0 and (range - 1).
shiftValue = randomInt + 3; // Shift the range to get an integer between 3 and 33; shiftValue was assigned in the first exercise,therefore, the 
                            // value must be reassigned.

console.log (shiftValue); //console.log (shiftValue) was run to test the random generater.