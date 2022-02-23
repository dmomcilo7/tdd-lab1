"use strict";

const translate = require("../src/translate");

describe("translate function", () => {
  test("word that starts with a vowel", () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with a capital vowel", () => {
    const result = translate("Apple");
    expect(result).toBe("appleway");
  });
  test("word that starts with a consonant", () => {
    const result = translate("rat");
    expect(result).toBe("atray");
  });
});
