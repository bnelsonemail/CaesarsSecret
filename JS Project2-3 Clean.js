/*                           EXERCISE 9 -- HELPING CAESAR TRADITIONAL SECRET PARTY

BACKGROUND:
**Previously on Springboard**:

In the heart of ancient Rome 🏛️, Julius Caesar had a secret 🤫. Not just about gladiators 🗡️ or gold 💰, but about... a party 🍾! 
This year, he would host a secret party only for his closest friends. This party was the talk of the town 🙊! There were magical fairies ✨, 
dancing peacocks 🦚, melodious harps 🎵, and sparkling fountains ⛲.
However, there was a problem 😲! Uninvited guests 🥷 would crash the party because the location 🗺️ would get leaked by spies 🕵️‍♂️.
Caesar needed a plan 💡! He thought, "I'll send out the invites encrypted 🔐. That way, only my true friends 🤝 will know when and where the party is!".

So, he came up with a cunning plan 🦊. Instead of writing the party location of the invitation directly 🏞️, he would shift each letter 
in by a fixed number 🔢. So, for example, if he decided to shift by 3:

- A would become D 🔄
- B would become E 🔄
- C would become F 🔄
- ... and so on.

If the invite said "GARDEN" 🌳, he would write "JDUGHQ" 🤯.
When Brutus (Caesar's friend turned enemy) received the letter 📜, he knew about this secret code 🗝️. He would shift the letters back 
by the same number and decode "JDUGHQ" to "GARDEN" 🌳. Mmm, clever 🧠!
However, any nosy Romans 👀 intercepting the message would be baffled 😶‍🌫️! "JDUGHQ? What kind of place is that?" they would wonder 🤷‍♂️.

Thanks to the "Caesar Cipher" 🔐, Caesar's secret party remained exclusive 😼, magical 🌌, and crasher-free 🥳!


                                                OBJECTIVE 🎯

Your task is to craft two intricate functions: one that encrypts a message in the spirit of Caesar's Cipher 
but with added layers of complexity and another that decrypts such messages, unveiling their hidden content.


                                                REQUIREMENTS

PART 1          **Implementing the Encryption Algorithm of Caesar's Cipher**
                        - Step A: Take a plaintext message and a shift value and return an encrypted string. If the message includes a character out of the alphabet, 
                          pass it as is to the encrypted string.
                        - Step B: After every two letters, insert a random letter from the alphabet.

PART 2          **Implementing the Decryption Algorithms of Caesar's Cipher**
                        - Take in the encrypted message and a shift value and return the original plaintext message.
                         - Accurately reverse the encryption process to retrieve the original message.

PART 3          **Decrypting the Secret Message**
                        - Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' 
                          yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj 
                          dgkvuiwj.
                        - Decrypt the above secret message using 42 as the shift value and complete the quest.

PART 4          **Using Comments**: As you build your functions, document your thought process, the purpose of each section of your code, and any 
                  challenges you come across. Good commenting not only helps others understand your code but also aids you in tracking your logic.

PART 5          **Attributing Help**:
                        - If you incorporate code or inspiration from online resources, attribute the source. At a minimum, provide the URL.
                        - If you get help from mentors or TAs, describe the help given and attribute the name.


                                                EXPECTED OUTCOME

A set of functions that can seamlessly encrypt and decrypt messages with the given complexities.
*/


//  PART 1

/*                                              PSUEDOCODE

1.      create a variable called plainMessage, which will contain a simple string message.  Should contain a sentence for testing.
2.      create a function called encryptMessage, which should utilize the function encryptLetter along with addtional logic to account
        for the additional requirements of spaces, non-alphabetic characters (symbols, apostrophies, periods, etc.) and adding a random 
        letter every two letters.
3.      To account for the non alphabetical characters, should use an if statement and reference the variable alphabet.  To compare
        utilize indexOf in the statement.
4.      To add a random letter every two spaces, the random letter will need to utilize the Math built in functions.  The algorithm 
        should be similar to EXERCISE 3.  The adding a random letter will need to utilize a for loop.  This should all be part of the 
        function encryptMessage. */



//                                              BEGIN CODE BELOW



const alphabet = "abcdefghijklmnopqrstuvwxyz";


//                  ENCRYPTION FUNCTIONS

//                  ENCRYPT INDIVIDUAL LETTERS

function encryptLetter (letter, shift) {
    letter = letter.toLowerCase();
    if (alphabet.includes(letter)) {
        const index = alphabet.indexOf(letter);
        const alphabetLength = alphabet.length;
        const newIndex = (index + shift) % alphabetLength; 
        const newLetter = alphabet [newIndex];
        return newLetter; 
    }
    else {
        return letter
    }
}

let encryptResult = encryptLetter ('B', 65);
console.log (`The encrypted letter is ${encryptResult}`);





//                  ENCRYPT MESSAGE

function caesarMessage (message, shift) {
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
            encryptedMessage += encryptLetter (message[i], shift);
            if (i % 2 === 0 ){
                encryptedMessage += randomLetter (message[i]);
            }
        }
        return encryptedMessage;     
    }
    


let encryptMessageResult = caesarMessage ('Garden 2024', 42);
console.log (`The encrypted message is ${encryptMessageResult}`);






//              RANDOM LETTER GENERATOR

function randomLetter (Letter) {
    let randLetter = "";
    const randomDecimal = Math.random();
    const range = 26; // 26; This represents the number of letters in the alphabet
    const randomInRange = randomDecimal * range; // Adjusts the range to get a number between 0 (inclusive) and the value of 'range' (exclusive).
    const randomInt = Math.floor(randomInRange); // Convert the decimal number to an integer to get values between 0 and (range - 1).
    randLetter = alphabet.charAt(randomInt);
    return randLetter;

}

const randomLetterResult = randomLetter('r');
console.log (`The random letter generated is ${randomLetterResult}`); //console.log was run to test the random generater.







//                          DECRYPTION FUNCTIONS

//                      DECRYPTION OF INDIVIDUAL LETTERS

function decryptLetter (letter, shift) {
    letter = letter.toLowerCase();
    if (alphabet.includes(letter)) {
        const index = alphabet.indexOf(letter);
        const alphabetLength = alphabet.length;
        if (shift < 27) {
            shift === shift;
        }
        else if (shift < 53) {
            shift = shift - 26;
        }
        else if (shift < 79) {
            shift = shift - 52;
        }
        else if (shift < 105) {
            shift = shift - 78;
        }
        else if (shift < 131) {
            shift = shift - 104;
        }
        else if (shift < 157) {
            shift = shift - 130;
        }
        else if (shift < 183) {
            shift = shift - 156;
        }
        else if (shift < 209) {
            shift = shift - 182;
        }
        else if (shift < 235) {
            shift = shift - 208
        }
        else if (shift < 261) {
            shift = shift - 234;
        }
        else {
            shift = NaN;
            console.log(`Please choose a smaller shift value`);
        }
        /* Not sure why the switch-case statement did not work
        switch (shift) {
            case shift < 27:
                shift === shift;
                break;
            case shift < 53:
                shift = shift - 26;
                break;
            case shift < 79:
                shift = shift - 52;
                break;
            case shift < 105:
                shift = shift - 78;
                break;
            case shift < 131:
                shift = shift - 104;
                break;
            case shift < 157:
                shift = shift - 130;
                break;
            case shift < 183:
                shift = shift - 156;
                break;
            case shift < 209:
                shift = shift - 182;
                break;
            case shift < 235:
                shift = shift - 208;
                break;
            case shift < 261:
                shift = shift - 234;
                break;
            case shift >= 261:
                shift = NaN;
                const shiftUndefined = console.log('Please choose a smaller shift');
                return shiftUndefined;       
        }*/
        const newIndex = (index - shift + alphabetLength) % alphabetLength;  
        const newLetter = alphabet [newIndex];
        return newLetter;  
    }
    else {
        return letter;
    }
}

let decryptLetterResult = decryptLetter('a', 42);
console.log(`The decrypted letter is ${decryptLetterResult}`);



//                      DECRYPTION OF MESSAGES

function caesarDecrypt (message, shift) {
    let decryptedMessage = "";
    for (let i = 0; i < message.length; i++){
        decryptedMessage += decryptLetter (message[i], shift);
        if (i % 2 === 0) {
            message.slice(message [i], message [i] + 1);
//      FIGURE THIS CODE OUT -- NOT WORKING
        }
    }
    return decryptedMessage;
}
let decryptedMessageResult = caesarDecrypt ('Iueuan', 42);
//let decryptedMessageResult = caesarDecrypt("Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj", 16);

console.log(`The decrypted message reads ${decryptedMessageResult}`);





/*                                              REFERENCES

1.  use of method includes() -- https://www.freecodecamp.org/news/how-to-check-if-a-string-contains-a-substring-javascript/
2.  Assistance with accounting for spaces, numbers and special characters -- Austin Hughes (Slack)
3.  Accessing the element of a given index in a string -- https://www.geeksforgeeks.org/javascript-program-to-access-individual-characters-in-a-string/ 
4.  Removing an element from a string -- https://www.geeksforgeeks.org/how-to-remove-a-character-from-string-in-javascript/

*/