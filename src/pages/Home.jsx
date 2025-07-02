import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1  style={{textAlign: "center", paddingTop: "140px", color: "#047847"}}>Home Page</h1>
      <Navbar expand="lg" style={{margin: '70px'}}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link style={{padding: '10px 30px', backgroundColor: 'blue', color: 'white', fontSize: '40px', fontWeight: 'bold', borderRadius: '10px'}} as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link style={{padding: '10px 30px', backgroundColor: 'blue', color: 'white', fontSize: '40px', fontWeight: 'bold', borderRadius: '10px', margin: '0 15px'}} as={Link} to={"/api"}>Api</Nav.Link>
            <Nav.Link style={{padding: '10px 30px', backgroundColor: 'blue', color: 'white', fontSize: '40px', fontWeight: 'bold', borderRadius: '10px'}} as={Link} to={"/api/global"}>Global</Nav.Link>
            <Nav.Link style={{padding: '10px 30px', backgroundColor: 'blue', color: 'white', fontSize: '40px', fontWeight: 'bold', borderRadius: '10px', margin: '0 15px'}} as={Link} to={"/api/global/redux"}>Redux</Nav.Link>
            <Nav.Link style={{padding: '10px 30px', backgroundColor: 'blue', color: 'white', fontSize: '40px', fontWeight: 'bold', borderRadius: '10px'}} as={Link} to={"/api/global/redux/props"}>Props</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Home
