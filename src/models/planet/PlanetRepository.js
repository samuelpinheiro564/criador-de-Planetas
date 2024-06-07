import { planeta } from "../../data/Planetas";
import Planeta from "./Planet";

 class PlanetasRepository {
  constructor() {
    this.planetas = [];
  };
  getAll() {
    return this.planetas;
  }
  get(id) {
    return this.planetas.find((planeta) => planeta.id === id);
  }
  add(planeta) {
    this.planetas.push(planeta);
  }

  remove(id) {
    this.planetas = this.planetas.filter((planeta) => planeta.id !== id);
  }

  update(id,name,data, cor1, cor2, populacao, localizacao, comunicacao, governante) {
    const planeta = this.get(id)
    if (planeta) {
   planeta.name = name;
    planeta.data = data;
    planeta.cor1 = cor1;
    planeta.cor2 = cor2;
    planeta.populacao = populacao;
    planeta.localizacao = localizacao;
    planeta.comunicacao = comunicacao;
    planeta.governante = governante;
    }
    return planeta;
  }
}
const planetasRepository = new PlanetasRepository();
planetasRepository.add(new Planeta(planeta.name, planeta.data, planeta.cor1, planeta.cor2, planeta.populacao, planeta.localizacao, planeta.comunicacao, planeta.governante));

export default planetasRepository;