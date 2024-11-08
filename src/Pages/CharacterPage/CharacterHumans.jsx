import "./CharacterPage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import CharCard from "../../Components/CharCard/ChardCard";

const CharacterPage = () => {
  
  const [data, setData]=useState([]);
  
  let {race} = useParams();

 useEffect(()=>{
  axios.get(`https://dragonball-api.com/api/characters?limit=50`)
  .then(char=> setData(char.data.items))},[])

  
  const tmp=data.filter(elem=>elem.race=='Human');
  

  return (
    <main id='character-page'>
        <h1 id="title-character">Personajes Humanos de Dragon</h1>        
        {
          <div id="characters-species">
            {tmp.map((element)=>
              <div key={element.id}>
                <Link to={"/details/"+element.id}>
                    <CharCard img={element.image} nombre={element.name} especie={element.species}/>
                </Link>            
              </div>
            )}  
          </div>
        }
    </main>
  )
}

export default CharacterPage