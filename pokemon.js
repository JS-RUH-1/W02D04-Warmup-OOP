class Pokemon {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
  showMore() {
    console.log(
      "The name ia " +
        this.name +
        "the type is " +
        this.type +
        "the color is " +
        this.color
    );
  }
}

let pokemon = new Pokemon("Pikachu", "electric", "yellow");
pokemon.showMore();

let eevee = new Pokemon("Pikachu", "normal", "brown");
eevee.showMore();

let squirtle = new Pokemon("Squirtle", "water", "blue");
squirtle.showMore();
