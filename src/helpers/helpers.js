const helpers = {

  getNumFromString: (str) => {
    // returns only first number from results;
    const num = str.match(/\d+/g);
    return num[0];
  },

  getNumsFromStrings: (strings) => {
    let nums = [];
    strings.forEach((str) => {
      nums.push(helpers.getNumFromString(str));
    });
  },

};

export default helpers;
