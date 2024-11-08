import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";
import axios from 'axios';

import CharCard from '../../Components/CharCard/ChardCard';

// ESTE ES EL QUE ESTOY TRABAJANDO

const HomePage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`https://dragonball-api.com/api/characters?page=${page}`);
        if (response.data.items.length > 0) {
          setData(prevData => {
            const newCharacters = response.data.items.filter(character => 
              !prevData.some(existingCharacter => existingCharacter.id === character.id)
            );
            return [...prevData, ...newCharacters];
          });
          setPage(prevPage => prevPage + 1);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
        setLoading(false);
      }
    };

    if (loading) {
      fetchCharacters();
    }
  }, [page, loading]);

  return (
    <main id='home-page'>
       <h1>Bienvenidos a los personaje de Dragon Ball Z</h1> 
      <div id='characters'>
        {data.map((element) => (
          <Link key={element.id} to={"/details/" + element.id}>
            <CharCard img={element.image} nombre={element.name} race={element.race} />
          </Link>
        ))}
      </div>
      {loading && <p>cargando las fichas...</p>}
    </main>
  );
}

export default HomePage;