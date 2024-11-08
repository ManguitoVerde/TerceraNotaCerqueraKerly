import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>        
        <Link to={"/"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">Inicio</Button>
        </Link>
        <Link to={"/character/Alien"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">No Humanos</Button>  
        </Link>
        <Link to={"/character/Humans"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">Humanos</Button>
        </Link>
        <Link to={"/about"}>
          <Button sx={{marginTop: 4, width: 150}} variant="contained">Acerca de..</Button>
        </Link>

    </nav>
  )
}

export default NavBar