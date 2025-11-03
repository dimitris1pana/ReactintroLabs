import { useState } from 'react'
import './App.css'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import ButtonAppBar from './ButtonAppBar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem'
import SimpleBottomNavigation from './SimpleBottomNavigation'
import LoaderProgress from './LoaderProgress'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import {useTour} from '@reactour/tour';



function App() {
  const [loading, setLoading] = useState(false);
  
  const {setIsOpen} = useTour();
  

  return (
    <>
    <div>
       <nav className='nav'>
        <button onClick={() => setIsOpen(true)}>Start Tour</button>
        <Link to="/">Home</Link>
            
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* ### add Contact here as a component  */}
          <Route path="/contact" element={<h2>Contact Page </h2>} />
        </Routes>
     
    </div>
   
    </>
  )
}

export default App



 {/* <ButtonAppBar />
    <Container align="center" >
    <Card sx={{ maxWidth: 345, marginTop: 5, padding: 2 }}>
      <Typography>
        Welcome to my first React app using Material-UI!  
      </Typography>
    
    </Card>
    <SimpleBottomNavigation />
    </Container>
    {/* TODO  */}
    //       <Container> 

    // <Button         onClick={handleClick}
    // disabled={loading}
    // variant="contained">
    //   <Typography>
    //     {loading ? <LoaderProgress /> : 'Click me'}
    //   </Typography>
    // </Button>
   
    // </Container> */}