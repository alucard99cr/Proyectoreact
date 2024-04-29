import {useState} from 'react'

//reglas de los hooks
//no se llaman en loops, ni condicione , ni while ni nada
//siempre en el nivel mas alto del componente
//solo se llaman en 2 partes:
//Componentes de react 
//custom hooks
//cuando creemos un custom hook use*

//perfecto para llamar a un api
const useContador =(iniciar)=>{
    const [contador,setContador] = useState(iniciar)
    const incrementar = () =>{
        setContador(contador+1)
    }
    return[contador,incrementar]
}
const App =()=>{
    const [contador,incrementar] = useContador(0);
    return(
        <div>
            Contador:{contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}
export default App