import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/NavbarComponent"
import Container from 'react-bootstrap/Container'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Navbar />
      <Container className='app-container'>
        <Header />
      </Container>
    </>
    
  );
}

export default App;
