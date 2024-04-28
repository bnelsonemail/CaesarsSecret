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
                        - Step 1: Take a plaintext message and a shift value and return an encrypted string. If the message includes a character out of the alphabet, 
                          pass it as is to the encrypted string.
                        - Step 2: After every two letters, insert a random letter from the alphabet.

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


const shift = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const partyLocation = "garden";
const plainMessage = 'Where will the party take place in 2024?';
index = plainMessage.indexOf(' ');
if (index = -1) {
    console.log(`The${index}is a space`);
}

   

/*
const randomDecimal = Math.random();
const range = 33 - 3 + 1; // 31; This represents the randon shift value as discussed above b/w 3 and 33.
const randomInRange = randomDecimal * range; // Adjusts the range to get a number between 0 (inclusive) and the value of 'range' (exclusive).
const randomInt = Math.floor(randomInRange); // Convert the decimal number to an integer to get values between 0 and (range - 1).
shiftValue = randomInt + 3; // Shift the range to get an integer between 3 and 33; shiftValue was assigned in the first exercise,therefore, the 
                            // value must be reassigned.

console.log (shiftValue); //console.log (shiftValue) was run to test the random generater.
*/





function encryptLetter (letter, shift) {
    const index = alphabet.indexOf(letter.toLowerCase());
    const alphabetLength = alphabet.length;
    const newIndex = (index + shift) % alphabetLength;
    const newLetter = alphabet [newIndex];
    return newLetter;
}

const encryptResult = encryptLetter ('B', 3);
console.log (`The encrypted letter is ${encryptResult}`);





function encryptMessage (message, shift) {
    //let encryptedMessage = "";
    let encryptedMessage = [];
    for (let i = 0; i < message.length; i++) {
        let sentence = message[i]
        if (alphabet.includes(message)){
            encryptedMessage += encryptLetter (sentence, shift); 
        }
        else
            encryptedMessage += sentence;
        //encryptedMessage += encryptLetter (message[i], shift); 
    }
    //for (let i = 0; i < message.length; i++) {
        /*if (i === &nbsp){
            encryptedMessage += i;
            console.log('test');
        
           // encryptedMessage += encryptLetter (message[i], shift);   
        }
        else
            //break
            //encryptedMessage += (' ');*/
            //encryptedMessage += encryptLetter (message[i], shift);
        return encryptedMessage;  
    }
    
//}

const encryptMessageResult = encryptMessage ('Gar to a', 3);
console.log (`The encrypted message is ${encryptMessageResult}`);







/*                                              REFERENCES

use of method includes() -- https://www.freecodecamp.org/news/how-to-check-if-a-string-contains-a-substring-javascript/


*/