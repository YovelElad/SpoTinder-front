import './App.css';
import NavBar from './components/NavBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



function App() {
  return (
    <div>
      <Container  maxWidth="sm" >
        <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }} />
        <NavBar/>
      </Container>
    </div>
  );
}

export default App;
 