import { useState } from 'react'
import countryData from "../resources/countryData.json" 
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionShow, setShowsuggestion] = useState(true)

  function handlechange(e){
    setText(e.target.value)

    setSuggestions(countryData.filter((el)=>el.name.toLowerCase().startsWith(text.toLowerCase())))
    setShowsuggestion(true)

  }
  let handleEsc =(e)=>{
    if(e.keyCode==27){
      setShowsuggestion(false)
      console.log('escape')
    } 
  }
  return (
    <div className='Box'>
      <h1>Search</h1>
     <input type="text" value={text} onChange={handlechange} onKeyDown={handleEsc}  list='suggest' />
     <datalist id='suggest' >
      {suggestionShow && suggestions.map((el,i)=>(
        <option key={i} value={el.name}></option>
      ))}
     </datalist>
     <button>Search</button>
    </div>
  )
}

export default App