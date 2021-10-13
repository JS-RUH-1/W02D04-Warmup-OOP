class Pokemon {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
  showMore() {
    console.log(this.name + " " + this.type + " " + this.color);
  }
}

let Pikachu = new Pokemon("Pikachu", "electric", "yellow");
let Eevee = new Pokemon("Eevee", "normal", "brown");
let Squirtle = new Pokemon("Squirtle", "water", "blue");
Pikachu.showMore();
Eevee.showMore();
Squirtle.showMore();
