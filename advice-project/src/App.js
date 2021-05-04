import React, { Component } from "react"; 
import axios from 'axios'
import './App.css'

class App extends Component {
    constructor()
    {
        super()
        this.state = {
            advice:" "
        }
    }

    componentDidMount()
    {
        this.fetchAdvice()

    }


    fetchAdvice = () => {
        axios
          .get("https://api.adviceslip.com/advice")
            .then(res => {
                const { advice } = res.data.slip
                this.setState({advice:advice})
              
            })
            

          .catch(err => console.log(err));
        
    }





    render() {
        const { advice } = this.state
        
      return (
        
        <div className="App">
            <div className="card">
                <h1 className="heading ">
                    { advice}

                  </h1>

                  <button onClick={this.fetchAdvice}  className="button"> <span >Give Me An Advice !!!</span></button>

            </div>
            
     </div>
    );
  }
}

export default App;