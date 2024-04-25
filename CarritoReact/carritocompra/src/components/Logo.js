import { Component } from "react";

const style ={
    logo:{
        fontWeight: '700',
        fontSize: '2rem',
        color: '#000',
        textDecoration: 'none',
    }
}
class Logo extends Component {
    render(){
        return(
            <div style={style.Logo}>
               <h1>Shop </h1> 
            </div>
        )
    }
}
export default Logo;