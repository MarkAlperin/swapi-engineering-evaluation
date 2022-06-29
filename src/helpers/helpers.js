const helpers = {
  getNumFromString: (str) => {
    // returns only first number from results;
    const num = str.match(/\d+/g);
    return +num[0];
  },

  getNumsFromStrings: (strings) => {
    return strings.map(str => {
      return helpers.getNumFromString(str);
    });
  },

  sortByUrl: (data) => {
    let sorted =  Object.values(data).sort((a, b) => {
      return helpers.getNumFromString(a.url) - helpers.getNumFromString(b.url);
    })
    return sorted;
  },

  matchByUrl: (urls = [], data = []) => {
    let urlNums = [];
    if (Array.isArray(urls)) {
      urlNums = helpers.getNumsFromStrings(urls);
    } else if (typeof urls === "string") {
      urlNums = [helpers.getNumFromString(urls)];
    }
    return data.filter(item => {
      return urlNums.includes(helpers.getNumFromString(item.url));
    });
  },

  sortByNumResidents: (array) => {
    return array.sort((a, b) => {
      const aResidents = a.residents || [];
      const bResidents = b.residents || [];
      return bResidents.length - aResidents.length;
    });
  },

};

export default helpers;
