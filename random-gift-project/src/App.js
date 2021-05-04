import React from 'react'
import './App.css'

import Random_v1 from './Component/Random_v1'
import Tag_v1 from './Component/Tag_v1'


function App() {
    return (
        <div>
            <h1> Random Gift Project </h1>
            <div className="main-container">
                <Random_v1 />
                <Tag_v1/>
            </div>
            
        </div>
    )
}

export default App
