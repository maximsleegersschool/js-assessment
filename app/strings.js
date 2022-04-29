exports = typeof window === "undefined" ? global : window;

exports.stringsAnswers = {
  /**
   * Find the index where the substring appeared
   * @param {String} quote
   * @param {String} substring
   */
  index: (quote, substring) => {return quote.indexOf(substring)},

  /**
   * Check if the quote contains the substring
   * @param {String} quote
   * @param {String} substring
   */
  contains: (quote, substring) => {return quote.includes(substring)},

  /**
   * To capitalize the first character of a string
   * @param {String} str
   */
  
  capitalize: (str) => {return str},
};
