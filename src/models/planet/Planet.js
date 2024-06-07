export default class Planeta {
  constructor( name, data, cor1, cor2, populacao, localizacao, comunicacao, governante  ) {
    this.id = this.getId();
    this.name = name;
    this.data = data;
    this.cor1 = cor1;
    this.cor2 = cor2;
    this.populacao = populacao;
    this.localizacao = localizacao;
    this.comunicacao = comunicacao;
    this.governante = governante;
  }
  getId(){
    return Math.floor(Math.random() * 1000);
}
}
