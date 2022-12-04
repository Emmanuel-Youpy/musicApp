const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2de72cce39msh10c7568b3a36e1cp146e21jsne8f02b9ddd74",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
