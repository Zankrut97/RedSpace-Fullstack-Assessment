const express = require("express");
const axios = require("axios");
var cors = require("cors");
const app = express();
app.use(cors());

app.get("/redspace/api/people/:id", async (req, res) => {
  if (validate(req)) {
    const personId = req.params.id;

    try {
      const resFromStarWarsApi = await axios.get(
        `https://swapi.dev/api/people/${personId}`
      );
      const filmsPromises = resFromStarWarsApi.data.films.map((film) =>
        axios.get(film)
      );
      const speciesPromises = resFromStarWarsApi.data.species.map((species) =>
        axios.get(species)
      );

      const filmsResponse = await Promise.all(filmsPromises);
      const speciesResponse = await Promise.all(speciesPromises);
      const homeWorldResponse = await axios.get(
        resFromStarWarsApi.data.homeworld
      );

      const films = [];
      for (let i = 0; i < filmsResponse.length; i++) {
        const filmObject = {
          title: filmsResponse[i].data.title,
          director: filmsResponse[i].data.director,
          producer: filmsResponse[i].data.producer,
          release_date: filmsResponse[i].data.release_date,
        };

        films.push(filmObject);
      }

      const species = [];
      for (let i = 0; i < speciesResponse.length; i++) {
        const speciesObject = {
          name: speciesResponse[i].data.name,
          average_lifespan: speciesResponse[i].data.average_lifespan,
          classification: speciesResponse[i].data.classification,
          language: speciesResponse[i].data.language,
        };

        species.push(speciesObject);
      }

      resFromStarWarsApi.data.films = films;
      resFromStarWarsApi.data.species = species;
      resFromStarWarsApi.data.homeworld = {
        name: homeWorldResponse.data.name,
        terrain: homeWorldResponse.data.terrain,
        population: homeWorldResponse.data.population,
      };

      const person = {
        name: resFromStarWarsApi.data.name,
        height: resFromStarWarsApi.data.height,
        mass: resFromStarWarsApi.data.mass,
        hair_color: resFromStarWarsApi.data.hair_color,
        skin_color: resFromStarWarsApi.data.skin_color,
        gender: resFromStarWarsApi.data.gender,
        birth_year: resFromStarWarsApi.databirth_year,
        homeworld: resFromStarWarsApi.data.homeworld,
        species: resFromStarWarsApi.data.species,
        films: resFromStarWarsApi.data.films,
      };
      res.status(200).send({
        message: "Success",
        data: person,
      });
    } catch (err) {
      res.status(400).send({
        message: "Error occurred: " + err,
        error: err,
      });
    }
  } else {
    res.status(400).send({
      message: "Id passed in Parameter is Invalid",
      data: null,
    });
  }
});

function validate(req) {
  if (req.params.id) {
    return true;
  } else {
    return false;
  }
}

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on Port 3000!!");
});
