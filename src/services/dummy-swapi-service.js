export default class DummySwapiService {
  _people = [
    {
      id: 1,
      name: "Bilbo TEST",
      gender: "male",
      birthYear: "long ago",
      eyeColor: "dark brown"
    },
    {
      id: 2,
      name: "Frodo TEST",
      gender: "male",
      birthYear: "long ago",
      eyeColor: "dark brown"
    }
  ];

  _planets = [
    {
      id: 1,
      name: "Earth TEST",
      population: "7 530 000 000",
      rotationPeriod: "23h 56s",
      diameter: "12 742km"
    },
    {
      id: 2,
      name: "Venus TEST",
      population: "not known",
      rotationPeriod: "243 days",
      diameter: "12 104km"
    }
  ];

  _starships = [
    {
      id: 1,
      name: "USS Enterprise TEST",
      model: "NCC-1701-C",
      manufacturer: "USA",
      costInCredits: "not known",
      length: "300m",
      crew: 1000,
      passengers: 50,
      cargoCapaciry: 100
    }
  ];

  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async () => {
    return this._people[1];
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async () => {
    return this._planets[1];
  };

  getAllStarhips = async () => {
    return this._starships;
  };

  getStarship = async () => {
    return this._starships[1];
  };

  getPersonImg = () => {
    return `https://i.pinimg.com/236x/97/32/db/9732db4dda7b53a1cfc0821874114721.jpg`;
  };

  getStarshipImg = () => {
    return `https://cdn.bfm.ru/news/maindocumentphoto/2019/11/12/jet.jpg`;
  };

  getPlanetImg = () => {
    return `https://livebla.com/wp-content/uploads/2017/06/mars-planeta.png`;
  };
}
