import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import headshot from '../assets/img/headshot.jpeg'

export const About  = () => {
  return (
    <section className='about' id='about'>
      <Container>
        <Row>
          <Col className='about-img' sm={4}>
            <img src={headshot} alt="Marcus" className='headshot'/>
          </Col>
          <Col className='about-me-txt'>
            <h1>Hey! My name is <span>Marcus</span></h1>
            <h2>Full Stack Developer Based In Melbourne</h2>
            <br />
            <p>I recently graduated from General Assembly's Software Engineering Immersive course & I'm currently looking to join a team of passionate & supportive developers. I've always been a logical thinker with a creative side, so naturally when I dipped my toes into the waters of web development my eyes were opened to a world of endless possibilities. Nowadays, nothing makes me happier than taking an idea in my head & bringing it to life through code!
            </p>
            <Button className='about-btn' target='_blank' href='https://drive.google.com/file/d/13GbcWu2o2QG-mISyOTaGy0JXYKYCP4dQ/view?usp=sharing'>View Resume</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
