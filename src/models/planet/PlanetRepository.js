export default class PlanetasRepository {
  constructor() {
    this.planets = [];
  }

  getAll() {
    return this.planets;
  }

  get(id) {
    return this.planets.find((planet) => planet.id === id);
  }

  add(planet) {
    this.planets.push(planet);
  }

  remove(id) {
    this.planets = this.planets.filter((planet) => planet.id !== id);
  }

  update(
    id,
    name,
    data,
    cor1,
    cor2,
    populacao,
    natural,
    humans,
    localizacao,
    comunicacao,
    governante
  ) {
    const planet = this.get(id);

    if (planet) {
      planet.id = id;
      planet.name = name;
      planet.data = data;
      planet.cor1 = cor1;
      planet.cor2 = cor2;
      planet.populacao = populacao;
      planet.natural = natural;
      planet.humans = humans;
      planet.localizacao = localizacao;
      planet.comunicacao = comunicacao;
      planet.governante = governante;
    }
    return planet;
  }
}
