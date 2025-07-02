import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

const Api = () => {
 let [info, setInfo] = useState([])
  let apiData = (()=>{
    axios.get("https://dummyjson.com/products").then((response)=>{
      setInfo(response.data.products)
    })
  })
  useEffect(()=>{
    apiData()
  },[])

  return (
    <>
       <h1  style={{textAlign: "center", paddingTop: "130px", color: "#047847"}}>Api Page</h1>
    <section>
      <Container style={{paddingTop: "60px", paddingBottom: "60px"}}>
        <Row>
         {info.map((item)=>(
            <Col lg={4} className='mb-5'>
              <Card style={{ width: '18rem' }} className='h-100'>
      <Card.Img variant="top" src={item.thumbnail} style={{paddingTop: '30px'}} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Api
