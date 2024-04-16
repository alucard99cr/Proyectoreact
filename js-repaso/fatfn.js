//funciones que se Declaran con la palabra reservada funtion sirve SOLO sirve para crear objetos / clases eb javascript
function Fn(){
    //{ prop : 'propiedad'}
    //y con el new ignora el return  
    //solo este tipo de funciones pueden ser llamadas con la palabra new 

    this.prop = 'propiedad de objeto'

}
Fn.prototype.lala = function FuncionDePrototipo(){}
const r = new Fn() //cuando uno llama una funcion con la palabra new se crea un objeto literal
//__proto__ es para llamar al prototypo 
//console.log(r.__proto__)
//console.log(r);
//fat arrow function no tiene un contexto de this 
const fatFn = () => {
    //no tiene un contexto de this
    return 'chamchito feliz'
}
//return impolixiti 
// las fat arrow funcion nunca pueden ser llamadas con la palabra new 
const r1 =  fatFn()
console.log(r1);

const  FnR = () => 2
const costante  = FnR();

console.log(costante);
