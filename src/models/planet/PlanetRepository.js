import planetsData from "../../data/Planetas";

// PlanetasRepository.js
export default class PlanetasRepository {
  constructor() {
    this.planets = [];
  }

  // Retorna todos os planetas
  getAll() {
    return this.planets;
  }

  // Retorna um planeta pelo ID
  get(id) {
    return this.planets.find((planet) => planet.id === id);
  }

  // Adiciona um novo planeta ao repositório
  add(planet) {
    this.planets.push(planet);
  }

  // Remove um planeta pelo ID
  remove(id) {
    this.planets = this.planets.filter((planet) => planet.id !== id);
  }

  // Atualiza os detalhes de um planeta existente
  update(id, updatedPlanet) {
    const index = this.planets.findIndex((planet) => planet.id === id);
    if (index !== -1) {
      this.planets[index] = updatedPlanet;
      return this.planets[index];
    }
    return null;
  }

  // Inicializa o repositório com dados mocados usando o método add
  initializeMockData(planetsData) {
    planetsData.forEach(planet => {
      this.add(planet);
    });
  }
}
