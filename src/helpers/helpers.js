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
    return nums;
  },

  sortByUrl: (data) => {
    let sorted =  Object.values(data).sort((a, b) => {
      return Number(helpers.getNumFromString(a.url)) - Number(helpers.getNumFromString(b.url));
    })
    console.log(sorted)
    return sorted;
  },

  matchByUrl: (urls = [], data = []) => {
    let results = data.filter(item => {
      return urls.includes(helpers.getNumFromString(item.url));
    });
    return results
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
