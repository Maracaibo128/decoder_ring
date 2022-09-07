// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

*/

const substitutionModule = (function () {

  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipher = [];
  function substitution(input, alphabet, encode = true) {

   //as it turns out, "Set" will allow me to have a set of completely unique values
  
   /*
   "A JavaScript Set is a collection of unique values.
  Each value can only occur once in a Set.
  A Set can hold any value of any data type." 
  
  and that is all taken from w3 schools
  */

const checkForRepeats = new Set(alphabet);
//here's a single line if statement, checking if alphabet is undefined, not long enough, or not unique enough
    if (alphabet === undefined || alphabet.length < 26 || [...checkForRepeats].length < 26) return false;
        
    alphabet.split("");
    if (encode)
    {
      for (let i = 0; i < 26; i++)
      {
        cipher[standardAlphabet[i]] = alphabet[i];
        
      }
    } else
    {
      for (let i = 0; i < 26; i++)
      {
        cipher[alphabet[i]] = standardAlphabet[i];
      }
    }
    let answer = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return cipher[letter]
    })
    return answer.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };