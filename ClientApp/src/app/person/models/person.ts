export interface Person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    gender: string;
    homeworld: Homeworld;
    species: Species[];
    films: Film[];
}

interface Homeworld {
    name: string
    terrain: string
    population: string
}
  
interface Species {
    name: string
    average_lifespan: string
    classification: string
    language: string
}
  
interface Film {
    title: string
    director: string
    producer: string
    release_date: string
}
  