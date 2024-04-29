import {useState,useEffect,Component} from 'react'

const useContador =(iniciar)=>{
    const [contador,setContador] = useState(iniciar)
    const incrementar = () =>{
        setContador(contador+1)
    }
    return[contador,incrementar]
}
//const Interval = ({contador}) =>{
 //   useEffect(()=>{
  //      const i = setInterval(()=>{ console.log(contador)},1000)
   //     return ()=>{
   //         clearInterval(i);
   //     }
   // },[contador])
   // return (
  //      <p>Intervalo</p>
 //   )
//}
class Interval extends Component{
    intervalo = ''
    componentDidMount(){
        this.intervalo = setInterval(()=>{
            console.log(this.props.contador)
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervalo)
    }
    render(){
        return(
            <p></p>
        )
    }
}
const App =()=>{
    const [contador,incrementar] = useContador(0);
    useEffect(()=>{
        document.title = contador
    },[contador])
    return(
        <div>
            Contador:{contador}
            <button onClick={incrementar}>Incrementar</button>
            <Interval contador={contador}/>
        </div>
    )
}
export default App