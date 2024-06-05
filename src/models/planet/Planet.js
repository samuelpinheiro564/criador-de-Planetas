export default class Planet {
  constructor(
    id,
    name,
    data,
    cor1,
    cor2,
    populacao,
    localizacao,
    comunicacao,
    governante
  ) {
    this.id = id;
    this.name = name;
    this.data = data;
    this.cor1 = cor1;
    this.cor2 = cor2;
    this.populacao = populacao;
    this.localizacao = localizacao;
    this.comunicacao = comunicacao;
    this.governante = governante;
  }
}
