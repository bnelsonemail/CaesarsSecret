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




/*                                              PSUEDOCODE

PART 1:

1.      create a variable called plainMessage, which will contain a simple string message.  Should contain a sentence for testing.
2.      create a function called encryptMessage, which should utilize the function encryptLetter along with addtional logic to account
        for the additional requirements of spaces, non-alphabetic characters (symbols, apostrophies, periods, etc.) and adding a random 
        letter every two letters.
3.      To account for the non alphabetical characters, should use an if statement and reference the variable alphabet.  To compare
        utilize indexOf in the statement.
4.      To add a random letter every two spaces, the random letter will need to utilize the Math built in functions.  The algorithm 
        should be similar to EXERCISE 3.  The adding a random letter will need to utilize a for loop.  This should all be part of the 
        function encryptMessage. 
        
        
PART 2:

1.  To decrypt the shift value will need to be adjusted.  The current setup does not account for a shift value above
    26 for the worst case scenario.  This is due to the formula used to go backwards versus forward.
2.  Use an if-else if-else statment to convert the shift value back to between 1 to 26.  This statement should be 
    placed within the decryptLetter function.


PART 3:

1.  The decryption works, but does not account for the random letter generated every 3rd letter.
2.  Create a function called finalMessage.  This will remove the random letters from the resulting message from the
    decryption function (caesarDecrypt).
3.  A for loop will need to be used to loop through the indices of the decrypted message.
4.  Use an if statement to remove the random letters every 3rd index.
    a.  The if statement formula: (i + 1) % 3 !== 0 { finalMessage += decryptedMessage[i]; }
        1.  This statement broken down:  (i + 1) => the for loop starts at index 0, to adjust for the index of 0, using
        i + 1 keeps the index at 0 but starts the count at 1, so the math will work.

        2.  % 3 !== 0 => Since every 3rd letter a random letter is generated, doing a mod 3 will give a remainder of 0.
        when making the mod not equal to 0, then add to final message means that every randomly generated letter will 
        not be added to the finalMessage string.

*/





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


let encryptMessageResult = caesarMessage ('Programming in JavaScript is fun!', 42);
console.log (`The encrypted message reads:  ${encryptMessageResult}`);
console.log(" "); // This was just to put a space between the two outputs.






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
        const newIndex = (index - shift + alphabetLength) % alphabetLength;  
        const newLetter = alphabet [newIndex];
        return newLetter;  
    }
    else {
        return letter;
    }
}





//                      DECRYPTION OF MESSAGES

function caesarDecrypt (message, shift) {
    let decryptedMessage = "";
    for (let i = 0; i < message.length; i++){
        decryptedMessage += decryptLetter (message[i], shift);
    }
    return decryptedMessage;
}

let decryptedMessageResult = caesarDecrypt("Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj", 42);


//                 REMOVAL OF RANDOM LETTERS

function finalMessage (decryptedMessage) {
    let finalMessage = "";
    for (let i = 0; i < decryptedMessage.length; i++) {
        if ((i + 1) % 3 !== 0) {  // mod 3 because every 3rd letter is being removed. The i+1 is used to compensate for the index starting at zero.
            finalMessage += decryptedMessage[i];
        }  
    }
    return finalMessage;
}

const finalMessageResult = finalMessage(decryptedMessageResult);
console.log(`The final decrypted message reads:  ${finalMessageResult}`);



/*                                              REFERENCES

1.  use of method includes() -- https://www.freecodecamp.org/news/how-to-check-if-a-string-contains-a-substring-javascript/
2.  Assistance with accounting for spaces, numbers and special characters -- Austin Hughes (Slack)
3.  Accessing the element of a given index in a string -- https://www.geeksforgeeks.org/javascript-program-to-access-individual-characters-in-a-string/ 
4.  Removing an element from a string -- https://www.geeksforgeeks.org/how-to-remove-a-character-from-string-in-javascript/
5.  Removing the random letters from the decrypted message -- https://stackoverflow.com/questions/78416647/caesars-cipher-with-a-twist-how-to-remove-random-letters-from-a-string (Camdan Mead)
*/