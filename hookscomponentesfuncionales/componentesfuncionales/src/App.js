import { useRef} from 'react'

// como usar document.get element by id 
const App = () =>{
    const ref = useRef()
    const inputRef = useRef()
    const click =() =>{
        console.log(ref.current.clientHeight)
    }
    const focus = ()=>{
        inputRef.current.focus()
    }
    return(
        <div >
            <input ref={inputRef} type="text" />
            <button onClick={focus}>Focus</button>
            <div onClick={click} ref={ref}>lala</div>
        </div>
    )
}

export default App