import {Component } from 'react'
const style ={
    title:{
        fontWeight:'bold',
        marginBottom: '30px'
    }
}
class Title extends Component{
    render()
    {
        return(
        <h1 style={style.title}>Tienda</h1>
        )
    }
}
export default Title;