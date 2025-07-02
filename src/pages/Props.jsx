import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import icon from '../assets/Icon.png'
import PropsUSer from '../components/PropsUSer'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'

const Props = () => {
  return (
    <>
      <h1  style={{textAlign: "center", paddingTop: "130px", paddingBottom: '60px', color: "#047847"}}>Props Page</h1>
      <section>
        <Container>
          <Row>
            <PropsUSer title="Set Daily Alarms" image={icon} />
            <PropsUSer title="Advanced Search"  image={icon4}/>
            <PropsUSer title="Share Blog Posts" image={icon1}/>
            <PropsUSer title="Archive Content" image={icon2}/>
            <PropsUSer title="Secure Checkout" image={icon3}/>
            <PropsUSer title="Faster Response" image={icon4}/>
            <div className='pb-5'></div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Props