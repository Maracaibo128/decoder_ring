// Write your tests here!

//note to myself: if you don't include the curly braces around substitution here at the top, when you run your test, it will say that substitution is not defined!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests written by Andre Lopez", () => {
    describe("substitution()", () => {
        it("is a function that actually exists", () => {
            expect(substitution).to.be.a("function");
        })
    })

    describe("error handling", () => {
        it("should return false if the substitution alphabet is missing", () => {
            let alphabet = undefined;
            let input = "thinkful";
            let actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
        it("should return false if the substitution alphabet is not exactly 26 characters", () => {
            let alphabet = "abcdefghijklm";
            let input = "thinkful";
            let actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
        it("should return false if the substitution alphabet does not contain unique characters", () => {
            let alphabet = "abcdefghijklmabcdefghijklm";
            let input = "thinkful";
            let actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
    })
    describe("encoding", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            let input = "message"
            let alphabet = "plmoknijbuhvygctfxrdzeswaq";
            let actual = substitution(input, alphabet);
            expect(actual).to.equal("ykrrpik");
        })
        it("should work with any kind of key with unique characters", () => {
            let alphabet = ".waeszrdxtfcygvuhbijnokmpl"
            let input = "message";
            let actual = substitution(input, alphabet);
            expect(actual).to.equal("ysii.rs");
        })
        it("should preserve spaces", () => {
            let input = "my message";
            let alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            let actual = substitution(input, alphabet);
            expect(actual).to.equal("yp ysii.rs");
        })
        it("should ignore capital letters", () => {
            let input = "ThiNkFul";
            let alphabet = "xoyqmcgrukswaflnthdjpzibev";
            let actual = substitution(input, alphabet);
            expect(actual).to.equal("jrufscpw");
        })
    })

    describe("decoding", () => {
        it("should decode a message by using the given substitution alphabet", () => {
            let alphabet = "plmoknijbuhvygctfxrdzeswaq";
            let input = "ykrrpik";
            let actual = substitution(input, alphabet, false);
            expect(actual).to.equal("message");
        })
        it("should work with any kind of key with unique characters", () => {
            let alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            let input = "ysii.rs";
            let actual = substitution(input, alphabet, false);
            expect(actual).to.equal("message");
        })
        it("should preserve spaces", () => {
            let alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            let input = "yp ysii.rs";
            let actual = substitution(input, alphabet, false);
            expect(actual).to.equal("my message");
        })
        it("should ignore capital letters", () => {
            let alphabet = "xoyqmcgrukswaflnthdjpzibev";
            let input = "jRufScPw";
            let actual = substitution(input, alphabet, false);
            expect(actual).to.equal("thinkful");
        });
    });
});