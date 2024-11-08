import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css"
import HomePage from "./Pages/HomePage/HomePage";
import CharacterPage from "./Pages/CharacterPage/CharacterPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import Footer from "./Components/Footer/Footer";
import Humans from "./Pages/CharacterPage/CharacterHumans";
import About from './Pages/About/About';


const App = () => {
  return (
   
      <Router>
        
            <Footer/>
         
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/character/Alien" element={<CharacterPage/>}/>
          <Route path="/character/Humans" element={<Humans/>}/>
          <Route path="/details/:id" element={<AboutPage/>}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    
  )
}

export default App