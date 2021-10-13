class Pokemon {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    showMore(){
        console.log({name: this.name, type: this.type, color: this.color});
        return;
    }
}

const Pikachu = new Pokemon("Pikachu", "electric", "yellow");
const Eevee = new Pokemon("Eevee", "normal", "Eevee");
const Squirtle = new Pokemon("Squirtle", "water", "blue");

Pikachu.showMore();
Eevee.showMore();
Squirtle.showMore();