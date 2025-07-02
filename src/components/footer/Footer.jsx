import React from 'react'
import './footer.css'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
     <>
     <section id='footer'>
      <Container>
        <Row>
          <Col lg={2}>
            <div className="footer_left">
              <h2><a href="#">React-Bootstrap</a></h2>
              <h5>© Copyright Finsweet 2022</h5>
              <h6>(480) 555-0103</h6>
              <h6>4517 Washington Ave. </h6>
              <h6>finsweet@example.com</h6>
            </div>
          </Col>
          <Col lg={{span: 1, offset: 2}}>
            <div className="footer_middle">
              <h6>Quicklinks</h6>
                <Nav>
                  <Nav.Link style={{color: 'white', paddingBottom: '10px'}} as={Link} to={"/"}>Home</Nav.Link>
                  <Nav.Link style={{color: 'white', paddingBottom: '10px'}} as={Link} to={"/api"}>Api</Nav.Link>
                  <Nav.Link style={{color: 'white', paddingBottom: '10px'}} as={Link} to={"/api/global"}>Global</Nav.Link>
                  <Nav.Link style={{color: 'white', paddingBottom: '10px'}} as={Link} to={"/api/global/redux"}>Redux</Nav.Link>
                </Nav>
            </div>
          </Col>
          <Col lg={2}>
          <div className="footer_icon">
             <h6>Connect</h6>
             <div className="ficon">
              <div className="ficon1">
              <a href="#"><FaFacebook /></a>
              </div>
              <div className="ficon2">
                <a href="#"><FaTwitterSquare /></a>
              </div>
              <div className="ficon3">
                <a href="#"><FaLinkedin /></a>
              </div>
             </div>
            </div>
          </Col>
          <Col lg={5}>
           <div className="footer_right">
            <h3>Subscribe to get Latest Updates and News</h3>
             <div className="subscribe-box">
               <input type="email" placeholder="Yourmail@gmail.com" className="email-input" />
               <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
           </div>
          </Col>
        </Row>
      </Container>
     </section>
    </>
  )
}

export default Footer
