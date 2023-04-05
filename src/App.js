import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/NavbarComponent"
import Table from "./components/Table/Table"
import Container from 'react-bootstrap/Container'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Navbar />
      <Container className='app-container'>
        <Header 
          title="Announcements"
          subTitle="View, create, or edit announcements for all employees of your company."
          buttonText="Post an Announcement"
        />
        <Table />
      </Container>
    </>
    
  );
}

export default App;
