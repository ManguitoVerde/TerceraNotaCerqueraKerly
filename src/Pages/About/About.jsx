import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box, Grid } from '@mui/material';
import './About.css';

const About = () => {
  const characters = [
    {
      name: "Goku",
      image: "https://www.elespectador.com/resizer/v2/ORPMXKF6Z5DOZCCWF22IP5NVWI.png?auth=ab9dc8b235e768091e588c7c39993d375eb3ed9765ca664fe9075d8230ca0704&width=920&height=613&smart=true&quality=60", // Reemplaza con la URL de la imagen de Goku
      description: "Goku es un Saiyajin criado en la Tierra, conocido por su fuerza y espíritu de lucha,Ademas de ser el mas importante en Dragon Ball Z."
    },
    {
      name: "Vegeta",
      image: "https://www.mundodeportivo.com/alfabeta/hero/2022/06/Esta-es-la-prueba-de-que-Vegeta-ha-superado-definitivamente-a-Goku.jpg?width=1200&aspect_ratio=16:9", 
      description: "Vegeta es el príncipe de los Saiyajin, rival de Goku y un guerrero orgulloso, de cara y sangre, además de ser el segundo más importante."
    },
    {
      name: "Piccolo",
      image: "https://www.mundodeportivo.com/alfabeta/hero/2023/07/alfabeta.1690195409.653.jpg?width=1200&aspect_ratio=16:9", // Reemplaza con la URL de la imagen de Piccolo
      description: "Piccolo es un Namekiano y antiguo enemigo de Goku, ahora uno de sus aliados más cercanos, por lo que ha ganado a Goku en el combate."
    }
  ];

  return (
    <Container maxWidth="md" className="container">
      <Box display="flex" justifyContent="center">
        <Card >
          <CardMedia
            className="card-media"
            image="https://i.redd.it/iqtrd5g4p8ax.jpg"
            alt="Rick and Morty"
          />
          <CardContent>
            <Typography variant="h5" component="div" align="center">
              Dragon Ball Z La Saga Que Marcó Generaciones
            </Typography>
            <Typography variant="body2" color="text.secondary" align="justify">
            Dragon Ball Z es una serie de anime y manga japonés creada por Akira Toriyama,
            que se estrenó en 1989 como la continuación de la historia de Dragon Ball. 
            Es una de las series de anime más populares y queridas en todo el mundo,
            conocida por su mezcla de acción, aventuras épicas, personajes memorables 
            y profundas lecciones sobre amistad, superación y sacrificio.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {characters.map((character, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card className="card">
              <CardMedia
                component="img"
                height="200"
                image={character.image}
                alt={character.name}
              />
              <CardContent>
                <Typography variant="h6" component="div" align="center">
                  {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="justify">
                  {character.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;