import axios from "axios";

const api = {
  getAllSwapi: async (keyword, initialLoad = false, url, results = []) => {
    try {
      url = url || `https://swapi.dev/api/${keyword}`;
      const response = await axios.get(url);
      results = results.concat(response.data.results);

      if (!initialLoad && response.data.next) {
        return api.getAllSwapi(
          keyword,
          initialLoad,
          response.data.next,
          results
        );
      }
      return { [keyword]: results };
    } catch (err) {
      console.error(err);
    }
  },

  getAllNestedDataSwapi: async (keywords) => {
    try {
      let nestedData = {};
      for (let i = 0; i < keywords.length; i++) {
        const keyword = keywords[i];
        const data = await api.getAllSwapi(keyword);
        nestedData = { ...nestedData, ...data };
      }
      return nestedData;
    } catch (err) {
      console.error(err);
    }
  },
};

export default api;
