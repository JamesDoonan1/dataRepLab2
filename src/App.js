
import './App.css';
//The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//visual studio can import the Header component for you
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {/* Highlight contol K and contol C */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path= '/' element= {<Content></Content>}></Route>
          <Route path= '/read' element= {<Header></Header>}></Route>
          <Route path= '/create' element= {<Footer></Footer>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
