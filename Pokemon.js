class Pokemon{
constructor(name,type,color){
    this.name=name;
    this.type=type;
    this.color=color;
}
showMore() {
 
    console.log(`
    Pokemon Name:${this.name}
    Pokemon Type: ${this.type}
    Pokemon Color: ${this.color}
    `)  
}
}
pokemonOne = new Pokemon("Pikachu","electric","yellow");
pokemonTwo  = new Pokemon("Eevee","normal","brown");
pokemonThree = new Pokemon("Squirtle","water","blue");

pokemonOne.showMore();
console.log("-----------");
pokemonTwo.showMore();
console.log("-----------")
pokemonThree.showMore();

