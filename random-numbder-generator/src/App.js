import React,{useState} from 'react'
import './App.css';

function App() {
  const [minval, setminval] = useState(1)
  const [maxval, setmaxval] = useState(10)
  const [randomnum, setrandomnum] = useState(0)

  const handlerandum = () => {
    setrandomnum(Math.floor(Math.random()*(maxval-minval+1)+minval))
    
  }




  return (
    <div className="App">
      <div className="container">
        <div className="randomnum">
          <h3>Random Numebr : <span>{ randomnum}</span></h3>

        </div>
        <div className="maxContainer">
          <div>

            {/* <p>Min:</p>
            <input
              type="number"
              value={minval}
              onCanPlay={(e)=>setminval(+e.target.value)}
            /> */}


            <h4>Min:</h4>
            <input
              type="number"
              value={minval}
              onChange={(e)=>setminval(+e.target.value)}
            />

          </div>

          <div>
            {/* <p>Max:</p>
            <input
              type="number"
              value={maxval}
              onChange={(e)=>setmaxval(+e.target.value)}
            /> */}

           <h4>Max:</h4>
            <input
              type="number"
              value={maxval}
              onChange={(e)=>setmaxval(+e.target.value)}
            />

        </div>

        </div>
        
        <button onClick={handlerandum}>Get Random Number</button>

      </div>
      
    </div>

  );
}

export default App;
