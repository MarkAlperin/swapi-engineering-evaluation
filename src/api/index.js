import axios from "axios";

const api = {
  getAllPlanets: async (options, url = "https://swapi.dev/api/planets", planets = []) => {
    try {
      const response = await axios.get(url);
      planets = planets.concat(response.data.results);
      if (!options.firstReq &&  response.data.next) {
        return api.getAllPlanets({firstReq: false}, response.data.next, planets);
      }
      return planets;
    }
    catch (err) {
      console.error(err);
    }
  },

  getAllResidents: async (url = "https://swapi.dev/api/people/", residents = []) => {
    try {
      const response = await axios.get(url);
      residents = residents.concat(response.data.results);
      if (response.data.next) {
        return api.getAllResidents(response.data.next, residents);
      }
      return residents;
    }
    catch (err) {
      console.error(err);
    }
  }
};

export default api;
