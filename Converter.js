function convertToRoman(num) {
  let romanNumeral = "";
  while (num > 0) {
    if (num < 4) {
      addTogether("I", 1);
    } else if (num === 4) {
      addTogether("IV", 4);
    } else if (num >= 5 && num < 9) {
      addTogether("V", 5);
    } else if (num === 9) {
      addTogether("IX", 9);
    } else if (num >= 10 && num < 40) {
      addTogether("X", 10);
    } else if (num >= 40 && num < 50) {
      addTogether("XL", 40);
    } else if (num >= 50 && num < 90) {
      addTogether("L", 50);
    } else if (num >= 90 && num < 100) {
      addTogether("XC", 90);
    } else if (num >= 100 && num < 400) {
      addTogether("C", 100);
    } else if (num >= 400 && num < 500) {
      addTogether("CD", 400);
    } else if (num >= 500 && num < 900) {
      addTogether("D", 500);
    } else if (num >= 900 && num < 1000) {
      addTogether("CM", 900);
    } else if (num >= 1000) {
      addTogether("M", 1000);
    } else {
      addTogether("ERROR", 1);
    }
  }

  function addTogether(letter, amount) {
    romanNumeral += letter;
    num -= amount;
  }

  return romanNumeral;
}

convertToRoman(36);
