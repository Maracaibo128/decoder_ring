// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if((!shift) || shift === 0 || shift < -25 || shift > 25){
      return false;
    }
    
    //when encode is true, we are using the shift number to encode the message. if it's a positive value, move to the right. when encode is false, we need to use the shift number to reverse the encoding, to decode it.  to go in the opposite direction of the original shift, i can use 0 - whatever the shift number is to get the negative value of that number
      if(encode === false){
        shift = 0 - shift;
      }
      //i can use the split method with "" to gather and manipulate the characters, and then use the join method to keep spaces where they originally were
    //like it says in the strings module, i need to make sure these are all lowercase, because of the whole unicode value thing, before i split them up
      const characters = input.toLowerCase().split("")
      ///since the argument given to split is just "", i'm going to be making a new array of every single character from that message.  i figured "characters" was as good a name as any for this new array...
      //and now that i have a new array of every character in lowercase, i'm going to use .map on it to make another new array called secretMessage using charCodeAt
      const secretMessage = characters.map((character) => {
        
        //a couple of google searches have led me to this resource: https://askjavascript.com/how-to-convert-string-to-char-code-in-javascript/#:~:text=Javascript%20has%20127%20characters.%20We%20get%20this%20number,at%20a%20specified%20index%20%28position%29%20in%20a%20string.
        //three things: charCodeAt, the map method, and charCodeFrom
        //charCodeAt will return the Unicode of my character
        let ascii = character.charCodeAt(0) - 97
        
        
        if (ascii < 0 || ascii > 26) {
          return character
        }
  
        ascii = ascii + shift;
        if (ascii < 0){
          ascii += 26;
        }
        
          ascii = ascii % 26;  //without this, i cant handle letters at the end of the alphabet
          ascii += 97
          return String.fromCharCode(ascii)
        
      })
      
      return secretMessage.join("")
      }
    
  
    return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
