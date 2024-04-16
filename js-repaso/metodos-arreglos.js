const arr  = [-4,-1,-2,-3,-5]

// const r = arr.filter(x => x>2)
const r = arr.filter((e,i)=>{
 console.log(i);
 return e > 2
})
// console.log(r);

// const mapped = arr.map((el) => `<h1>${el}</h1>`)
// console.log(mapped);

const user = [
    {id:1,name:'Chanchito feliz'},
    {id:2,name:'Chanchito Triste'},
    {id:3,name:'Chanchito hambriento'},
    {id:4,name:'Chanchito enojado'}
]
 const mapped = user.map((user) => `<h1>${user.name}</h1>`)
// console.log(mapped);
// const getMax =(a,b)=> Math.max(a,b)
// const r1 = arr.reduce( getMax)
// console.log(r1);

// const r1 = user.reduce( (acc,el)=>
// `${acc === '' ? '' :`${acc},`}${el.name}`,'')
// console.log(r1);
const r1 = user.reduce((acc,el)=> {
    if(el.id < 2){
        return acc 
    }
    return acc.concat(el)
},[])
console.log(r1)

