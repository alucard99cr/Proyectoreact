const chanchitosFelices = ['chancho1','chancho2', 'chancho3']
 const chanchitostrsiste = ['chanc1','chanc2', 'chanc3']
//export const otrosChanchos =[]
const otrosChanchos =[]

const fn1 =()=>{
    console.log('soy la funcion arow');
}
function fn2(){
console.log('soy la funcion normal');
}

//export {chanchitosFelices, chanchitostrsiste

// forma antiugua de exportar
//module.exports = {chanchitosFelices, chanchitostrsiste}
export {chanchitostrsiste,otrosChanchos,fn1,fn2}
export default chanchitosFelices

