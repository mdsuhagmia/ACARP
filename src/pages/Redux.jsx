import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../components/slice/countSlice'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


const Redux = () => {

  let Dispatch = useDispatch()

  let getData = useSelector((state)=>state.count.value)

  return (
     <>
      <h1  style={{textAlign: "center", paddingTop: "130px", paddingBottom: '60px', color: "#047847"}}>Redux Page</h1>
    <section>
      <Container>
        <Row>
          <Col lg={4} style={{textAlign: 'center', marginBottom: '70px'}}>
            <button style={{backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px'}} onClick={()=>Dispatch(increment())}><FaPlus style={{fontSize: '40px'}}/></button>
            <h2 style={{color: 'red', fontSize: '40px', padding: '15px 0'}}>{getData}</h2>
            <button style={{backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px'}} onClick={()=>Dispatch(decrement())}><FaMinus  style={{fontSize: '40px'}} /></button>
          </Col>
          <Col lg={4} style={{textAlign: 'center', marginBottom: '70px'}}>
            <button style={{backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px'}} onClick={()=>Dispatch(increment())}><FaPlus style={{fontSize: '40px'}}/></button>
            <h2 style={{color: 'red', fontSize: '40px', padding: '15px 0'}}>{getData}</h2>
            <button style={{backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px'}} onClick={()=>Dispatch(decrement())}><FaMinus  style={{fontSize: '40px'}} /></button>
          </Col>
          <Col lg={4} style={{textAlign: 'center', marginBottom: '70px'}}>
            <button style={{backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px'}} onClick={()=>Dispatch(increment())}><FaPlus style={{fontSize: '40px'}}/></button>
            <h2 style={{color: 'red', fontSize: '40px', padding: '15px 0'}}>{getData}</h2>
            <button style={{backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px'}} onClick={()=>Dispatch(decrement())}><FaMinus  style={{fontSize: '40px'}} /></button>
          </Col>
        </Row>
      </Container>
    </section>
     </>
  )
}

export default Redux