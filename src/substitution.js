// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let actualAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let secretMessage = [];

  function substitution(input, alphabet, encode = true) {
    // because the alphabet parameter has to be a string of exactly 26 characters, i'll check for that here so i can return early
    if (!alphabet || alphabet.length !== 26) return false;
   
    //The Set constructor lets you create Set objects that store unique values of any type, according to mdn web docs
    let uniqueCheck = new Set(alphabet);
    
    //if the substitution alphabet doesn't contain unique characters i will get an error. i can also use the spread operator on a Set, so i will use that to make sure these two alphabets are the same length.      
    if (actualAlphabet.length !== [...uniqueCheck].length) return false;
    
    //now to turn this alphabet input string into an array, and either assign the actual alphabet at each index to the wacky alphabet at the same index, or vice versa
    alphabet.split("");
    
    //encode is going to be either true or false, so i will use an if/else statement before i start looping
    if (encode) {
      for (let i = 0; i < 25; i++) {
        secretMessage[actualAlphabet[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < 25; i++) {
        secretMessage[alphabet[i]] = actualAlphabet[i];
      }
    }
    let result = input
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (letter === " ") return " ";
        return secretMessage[letter];
      });
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };