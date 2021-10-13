
// object one is Pikachu and its type is electric and its color is yellow.

// object two is Eevee its type is normal and color is brown.

// object three is Squirtle its type is water and its color is blue.
// excute the showMore() function for each object.


class Pokemon{
    constructor(pName,type,color){
        this.pName = pName;
        this.type = type;
        this.color = color;
    }

    showMore(){
        console.log(`
        Pokemon Details:
        Name: ${this.pName}
        Type: ${this.type}
        Color: ${this.color}

        `)
    }

}

pikachu = new Pokemon("Pikachu","Electric","Yallow")
eevee = new Pokemon("Eevee","Normal","Blue")
squirtle = new Pokemon("Squirtle","Water","Blue")


pikachu.showMore()
eevee.showMore()
squirtle.showMore()