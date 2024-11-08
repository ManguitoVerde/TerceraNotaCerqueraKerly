import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import './AboutPage.css'; // Asegúrate de importar el archivo CSS

function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`https://dragonball-api.com/api/characters/${id}`);
        setCharacter(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load character details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="lg" id="character-detail">
        <Typography variant="h5">Cargando...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" id="character-detail">
        <Typography variant="h5">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" id="character-detail">
      <Typography variant="h4">Datos del personaje</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <img src={character.image} alt={character.name} />
        </Grid>
        <Grid item xs={12} sm={6} md={8} className="character-info">
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6"><strong>Nombre:</strong> {character.name}</Typography>
            <Typography variant="h6"><strong>Origen:</strong> {character.affiliation}</Typography>
            <Typography variant="h6"><strong>Raza:</strong> {character.race}</Typography>
            <Typography variant="h6"><strong>Género:</strong> {character.gender}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        Atrás
      </Button>
    </Container>
  );
}

export default CharacterDetail;