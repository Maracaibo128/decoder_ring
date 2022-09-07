// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  //encoder -> letters to numbers
  const encoder = {
    a: "11",
    b: "21",
    c: "31",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };
  
  //decoder -> numbers to letters
  const decoder = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };
  function polybius(input, encode = true) {
    
    if (encode) {
      //start by making the input lowercase
      let lowerCaseInput = input.toLowerCase();
      
      //i can use spread on the string to make an array of characters/letters, then use the array method map 
      let encodedMessage = [...lowerCaseInput].map((letter) => {
        
        //for leaving spaces as is
        if (letter.charCodeAt() < 97 || letter.charCodeAt() > 122)
          return letter;
        return encoder[letter];
      });
      return encodedMessage.join("");
    } 
    
    else if (encode === false) {
     
      const result = [];
      //for ensuring the number of characters in the string excluding spaces is even
      if (input.split(" ").join("").length % 2 == 1) return false;
      
      //because a single letter becomes two slots in the returned message i have to increment by 2 instead of the usual 1, and then use i + 1 to put the right number next to the first
      for (let i = 0; i < input.length; i = i + 2) {
        let thisNum = input[i];
        let nextNum = input[i + 1];
        //for keeping our spaces where they are
        if (thisNum === " ") {
          result.push(thisNum);
          //because the space will only take one spot, i subtract 1 from i before checking the next input[i]
          i = i - 1;
        } else {
          //i can use a template literal to smoosh the two numbers together
          result.push(`${thisNum}${nextNum}`);
        }
      }
      //now to map my new array with the "decoder -> number to letter" values and use join method to put each character next to the other
      let decodedResult = result.map((num) => {
        if (num === " ") return num;
        return decoder[num];
      });
      return decodedResult.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };