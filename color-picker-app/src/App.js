import React, { useState } from 'react'
import './App.css'

import { SliderPicker} from 'react-color';

function App() {
  const [color,setcolor]=useState("FF0000")
  return (
    <div className="App">
      <SliderPicker
        color={ color }
        onChangeComplete={(color) => {
          setcolor(color.hex)
          
        }}
      />
      <div style={{
        backgroundColor:color,
        height: "300px"
      }}>
        <h1>React-Color</h1>
        <h1>Be |Bravo| About Yourself</h1>

      </div>
      
    </div>
  )
}

export default App
