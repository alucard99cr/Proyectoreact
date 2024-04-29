

const MiComponente =({miProp}) =>{
  return(
    <div>
      Nombre:{miProp}
    </div>
  )
}

const App =() =>{
  return(
    <MiComponente miProp={'hola'}/>
  )
}
export default App
