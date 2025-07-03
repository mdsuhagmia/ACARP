import React, { useState } from 'react'
import { Col } from 'react-bootstrap'

const PropsUSer = ({title, image}) => {
  let [show, setShow] = useState(false)
  let handleShow = ()=>{
    setShow(!show)
  }
  return (
    <>
      <Col lg={4}>
        <div style={{ backgroundColor: 'rgb(255, 255, 255)', marginBottom: '40px', borderRadius: '30px', boxShadow: '20px 20px 120px rgba(0, 0, 0, 0.2)', border: '2px solid rgba(132, 84, 245, 0.21)' }}>
          <div className='d-flex gap-3 pt-4 ps-3'>
            <div><img style={{ width: '40px' }} src={image} alt="icon" /></div>
            <div><h2 style={{ fontSize: '25px', paddingTop: '5px' }}>{title}</h2></div>
          </div>
          <p className='ps-3 pe-3 ' style={{ fontSize: '18px', fontWeight: 'normal', color: 'rgba(0, 0, 0, 0.49)', paddingTop: '10px' }}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
          <div className='ps-3 pt-1'> {show == true ? <p>Lorem ipsum dolor sit consectetur.</p> : "" } <button style={{border: 'none', paddingBottom: '40px'}} onClick={handleShow}>Read more</button> </div>
        </div>
      </Col>
    </>
  )
}

export default PropsUSer
