import axios from "axios";

const api = {
  getAllPlanets: async (url = "https://swapi.dev/api/planets", planets = []) => {
    try {
      const response = await axios.get(url);
      planets = planets.concat(response.data.results);
      if (response.data.next) {
        return api.getAllPlanets(response.data.next, planets);
      } else {
        return planets;
      }
    }
    catch (err) {
      console.error(err);
    }
  }
};

export default api;
