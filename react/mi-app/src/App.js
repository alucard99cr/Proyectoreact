import {Component} from 'react'

class Button extends Component{
    state ={}
    constructor(props){
        super(props);
        console.log('constructor',props);
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate',prevProps,prevState);
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render() {
        console.log('ejecutando metodo render');
        return(
            <button className={this.props.className}>Enviar</button>
        )
    }
}
class Input extends Component{
render(){
    return(
    <input value={this.props.value}
    onChange={this.props.onChange}/>
    )
}
}
class App extends Component{
    state = {
        nombre:'',
        apellido:''
    }
    updateValues = (prop,value) =>{
        this.setState({[prop]:value})
    }
    render(){
        return(        
            <div>
                <h1>Nombre Completo : {`${this.state.nombre }${this.state.apellido}`}</h1>
                <Input 
                    value ={this.state.nombre}
                    onChange={e=> this.updateValues('nombre',e.target.value)}/>
                <Input 
                value ={this.state.apellido}
                onChange={e=> this.updateValues('apellido',e.target.value)}/>
                {this.state.valor===3?<Button chanchito='feliz'/>:null}
                <button className= {`${this.state.valor}`}
                onClick={()=>this.setState({valor:2})}>Enviar en app</button>
            </div>
        )
    }
}
export default App