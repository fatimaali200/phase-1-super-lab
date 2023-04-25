class Tree{
    constructor(species){
        this.species=species;
    }
    static definition(){
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
}
const tree = new Tree( 'Maple' );
console.log(Tree.definition())

class Deciduous extends Tree{
    constructor(species , name){
        super(species);
        this.name=name;
    }
    static definition() {
        return (
          super.definition() + " Deciduous trees shed their leaves annually."
        );
    }
    
}
const  oak = new Deciduous( 'Oak', 'Professor' );