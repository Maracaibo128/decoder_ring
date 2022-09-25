// Write your tests here!
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar() tests written by Andre Lopez", () => {
  describe("caesar()", () => {
  
  let input = "Andre Lopez";
  let shift = 5;

  it("is a function that actually exists", () => {
    expect(caesar).to.be.a("function");
  });

  //it was here that i learned how to open settings in vscode with control + , to figure out a way to get the text to wrap, because this it statement turned out to be humongous.  but it was worth it to get all the invalid shift values into one test.  settings, editor: word wrap on
  it("should return false if the shift amount is 0, greater than 25, less than -25, null, or undefined.", () => {
    const shiftValues = [0, -26, 26, null, undefined];
    //so i smooshed all those invalid shifts into an array and used the every method to test every shift value would return false if used in the caesar function as an argument, using bang in the function call to get true
    const actual = shiftValues.every((shift) => {
      return !caesar(input, shift)
    })
    expect(actual).to.be.true;
  })

  it("returns a result for all valid shift amounts", () => {
    const shiftValues = [-25, -1, 1, 25];
    //again using the every method to get that actual to be true
    const actual = shiftValues.every((shift) => {
      return caesar(input, shift);
    });
    expect(actual).to.be.true;
  });

  describe("encoding a message", () => {
    it("returns a string", () => {
      const expected = "string";
      const actual = typeof caesar(input, shift);
      expect(actual).to.equal(expected);
    })
  
    it("returns correct length", () => {
      const expected = input.length;
      const actual = caesar(input, shift).length;
      expect(actual).to.equal(expected);
    })

    it("encodes 'Andre R. Lopez!' shifted to the right by +1 correctly", () => {
      input = "Andre R. Lopez!";
      shift = 1;
      const expected = "boesf s. mpqfa!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    })

    it("encodes 'Andre R. Lopez!' shifted to the left by -1 correctly", () => {
      input = "Andre R. Lopez!";
      shift = -1;
      const expected = "zmcqd q. knody!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    })
  })

  describe("decoding a message", () => {
    it("decodes 'boesf s. mpqfa!' shifted to the left by -1 correctly", () => {
      input = "boesf s. mpqfa!";
      shift = -1;
      const expected = "andre r. lopez!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    })

    it("decodes 'zmcqd q. knody!' shifted to the right by +1 correctly", () => {
      input = "zmcqd q. knody!";
      shift = 1;
      const expected = "andre r. lopez!";
      const actual = caesar(input, shift);
      expect(actual).to.deep.equal(expected);
    })
  })


})
})
