"use strict";

const translate = (word) => {
  word = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  //if the word starts with a vowel... do the stuff
  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    const index = word.split("").findIndex((letter) => vowels.includes(letter));
    return word.slice(index) + word.slice(0, index) + "ay";
  }
};
//     word[0] === "a" ||
//     word[0] === "e" ||
//     word[0] === "i" ||
//     word[0] === "o" ||
//     word[0] === "u"
//   ) {
//     return (word = `${word}way`);
//   } else {
//     return (word = `${word}ay`);
//   }
// };

// const lowerCase = (word) => word.toLowerCase();

module.exports = translate;
