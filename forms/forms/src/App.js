import { useState } from 'react'
const App = () =>{
    const [value,setValue] = useState({
        normal:'',
        texto:'',
        select:'',
        accept:'',
        estado:'feliz'})
    const handleChange = ({target}) => {
        console.log(target.type ,target.checked)
    setValue((state)=>({
        ...state,
        [target.name]:target.type === 'checkbox' 
        ? target.checked 
        : target.value
    }))
    }
    console.log(value)
    return(
        <div>
            {value.length <5 ? <span>longitud minima de 5</span>:null}
            <input type="text" name="normal" value={value.normal} onChange={handleChange}/>
            <textarea name='texto' value={value.texto} onChange={handleChange}/>
            <select value={value.select} name='select' onChange={handleChange}>
                <option defaultValue  disabled value="">-- Selecione --</option>
                <option value="chanchofeliz">Chancho Feliz</option>
                <option value="chanchitofeliz">Chanchiito feliz</option>
                <option value="chanchitotriste">chanchito triste</option>
                <option value='felipe'>Felipe</option>
            </select>
            <input
                type="checkbox"
                name="accept" 
                onChange={handleChange} 
                checked={value.accept}/>
            <div>
                <label>Chancho</label>
                <input 
                    onChange={handleChange} 
                    type="radio"
                    value="feliz"
                    name='estado' 
                    checked={value.estado === 'feliz'}/>Feliz
                    
                <input  
                onChange={handleChange} 
                type="radio" 
                value="triste" 
                name='estado' 
                checked={value.estado === 'triste'}/>Triste
                <input  
                onChange={handleChange} 
                type="radio" 
                value="felipe" 
                name='estado' 
                checked={value.estado === 'felipe'}/>Felipe
            </div>
            
        </div>
    )
}
export default App;