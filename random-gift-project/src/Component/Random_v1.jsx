import axios from 'axios';
import React, { useEffect,useState}from 'react'

const API_KEY = process.env.REACT_APP_API_KEY;



function Random_v1() {

    const [gif, setgif] = useState('')

    
    

    //componect Did mount Method First render 
    
        const fetchGif = async (tag) => {
            

            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag={tag}`;

            const { data } = await axios.get(url)

            const imagesSr = data.data.images.downsized_large.url;
            setgif(imagesSr)
            
        }


    useEffect(() => {

            fetchGif()
    
        
}, )
 

    const handleclick = () => {
        fetchGif()
        
    }




    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gif} alt="Random Gif"/>
            <button onClick={handleclick}>Click For New </button>

            
        </div>
    )
}

export default Random_v1
