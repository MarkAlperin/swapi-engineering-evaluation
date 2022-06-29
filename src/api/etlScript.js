import helpers from "../helpers/helpers";

  const loadArrayOfObjects = (arr, type) => {
    try {
      const url = `https://swapi-planets-and-people-default-rtdb.firebaseio.com/${type}.json`;
      arr.forEach( async item => {
        const formattedItem = formatObject(item);
        console.log("formattedItem", formattedItem);
        const response = await fetch(
          url,
          {
            method: "POST",
            body: JSON.stringify(formattedItem),
            headers: {"Content-Type": "application/json"}
          });
          const responseData = await response.json();
          console.log("responseData", responseData);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const formatObject = (obj) => {
    let keys = Object.keys(obj);
    keys.forEach((key) => {
      if (Array.isArray(obj[key])) {
        obj[key] = formatArrayElements(obj[key]);
      }
    });
    return obj;
  };

  const formatArrayElements = (arr) => {
    let formattedArray = arr.map((item) => {
      return helpers.getNumFromString(item);
    });
    return formattedArray;
  };

export default loadArrayOfObjects;
