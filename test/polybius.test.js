// Write your tests here!

const { polybius } = require("../src/polybius");
const {expect} = require("chai");

describe("polybius() tests written by Andre Lopez", () => {
    describe("polybius()", () => {
        it("is a function that actually exists", () => {
            expect(polybius).to.be.a("function");
        })
        it("should return false if the length of all numbers is odd", () => {
            const message = "2345 235134341122514";
            const actual = polybius(message, false);
      
            expect(actual).to.be.false;
          });
    })
    describe("encoding", () => {
        it("should translate both the letters i and j to 42", () => {
            expect(polybius("ij")).to.equal("4242");
        });

        it("should encode a message by translating each letter to number pairs", () => {
            expect(polybius("andre")).to.equal("1133412451");
        })

        it("should leave spaces as is", () => {
            const message = "my message";
            const actual = polybius(message);
            expect(actual).to.equal("2345 23513434112251")
        })
    })

    describe("decoding a message", () => {
        it("should decode a message by translating each pair of numbers to a letter", () => {
            expect(polybius("23513434112251", false)).to.equal("message")
        })

        it("should translate 42 to both i and j", () => {
            expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful")
        })
        
        it("should leave spaces as is", () => {
            expect(polybius("2345 23513434112251", false)).to.equal("my message");
        })
    })
})
