import axios from "axios";

const api = {

  getAllSwapi: async (
    keyword,
    initialLoad = false ,
    url,
    results = [],
  ) => {
    try {
      url = url || `https://swapi.dev/api/${keyword}`;
      const response = await axios.get(url);
      results = results.concat(response.data.results);

      if (!initialLoad && response.data.next) {
        return api.getAllSwapi(
          keyword,
          { initialLoad: false },
          response.data.next,
          results
        );
      }
      return {[keyword]: results};

    } catch (err) {
      console.error(err);
    }
  },

};

export default api;
