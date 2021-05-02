import React, { useState } from 'react'
import './App.css'

function App() {
  const ENTER = 13
  const COMMA = 188
  const BACKSPACE = 8

  const [tags, setTags] = useState(["Html", "Css", "React"])
  const[value,setvalue]=useState(" ")
  
  
  const handleKeyUp = (e) => {
    const key = e.keyCode
    if (key === ENTER || key === COMMA) {
      addTag()
      //adTag
    }
      
    }

    const keyDoun = (e) => {
      const key = e.keyCode
      if (key === BACKSPACE && !value) {
        //EditTag
        editTag()
      }
        
    
  }
  


  const addTag = () => {
    let tag = value.trim().replace(/./g, " ")
    if (!tag) return
    setTags([...tags, tag])
    setvalue("")
    
  }

  const editTag = () => {
    setvalue(tags.pop())
  }



  return (
    <div className="App">
      <div className="container">
        {tags.map((tag,index) => (
          <div key={index} className="tag">{ tag}</div>
        ))}

        <input
          
          type="text"
          placeholder="Add Tag..."
          autoFocus
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          onKeyUp={handleKeyUp}
          onKeyDown={keyDoun}

          

        />

      </div>


      
    </div>
  )
}

export default App
