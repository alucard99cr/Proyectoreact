import {useRef} from 'react'
const App = () =>{
    const input = useRef()
    const file = useRef()
    const submit = () =>{
        console.log(input.current.value)
        console.log(file.current.files[0])
        const form = new FormData()
        form.append('campo', input.current.value)
        form.append('archivo', file.current.files[0])
        fetch('/LALLA',{method:'POST',body:form})
        console.log(form)
    }
    return(
        <div>
            <div>
                <span>lala</span>
                <input type='text' name='campo' ref ={input}/>
                <input type='file' ref={file}/>
            </div>
            <input type='submit' value='Enviar' onClick={submit}/>
        </div>
    )
}
export default App;