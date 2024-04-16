// const   Rectangulo = class R{

// }
//clases declaradas con class no tienen hoisting
class Rectangulo{
    
}
//Hoisting
//y esto es cuando tomamos variable definidas con var 
//y funciones definidas con function
//y las lleva al comienzo del archivo 
//console.log(Cuadrado);
function Cuadrado(){

}
//const r = new Rectangulo();

//console.log(Rectangulo,Cuadrado);
//los constructires de class no puede ser llamadas sin new
class Chancho{
propiedad = 'mi propiedad'
#hambre 
static estatico = 42
    
    constructor(estado = 'Feliz' , hambre = false){
        this.#hambre = hambre
        this.estado = estado

    }
    static comer(){
        console.log(this.estatico,'estoy comiendo !');
    }
    hablar(){
        console.log(`chancho ${this.estado} ${this.#hambre ? 'con mucha hambre!' : 'satisfecho!'}`);
    }
}
Chancho.comer()
const chancho = new Chancho('gordo');
chancho.hablar();



// console.log(chancho)