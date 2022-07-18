import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from 'react-bootstrap';
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>My Skills</h2>
              <p>In 2022, I completed a software engineering bootcamp at General Assembly Australia. I learned so many skills that I now use every day & I'm on a mission to gain a broader & deeper understand of languages & frameworks. This is only the beginning... </p>
            </div>
            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
              <div className="item">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='Javascript'/>
                <h5>Javascript</h5>
              </div>
              <div className="item">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' alt='Typescript'/>
                <h5>Typescript</h5>
              </div>
              <div className="item">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' alt='Ruby'/>
                <h5>Ruby</h5>
              </div>
              <div className="item">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='React'/>
                <h5>React</h5>
              </div>
              <div className="item">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' alt='HTML'/>
                <h5>HTML</h5>
              </div>
              <div className="item">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' alt='CSS'/>
                <h5>CSS</h5>
              </div>
              <div className="item">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' alt='Express.js' className='filter-white'/>
                <h5>Express.js</h5>
              </div>
              <div className="item">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' alt='Node.js'/>
                <h5>Node.js</h5>
              </div>
              <div className="item">
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' alt='Postgresql'/>
                <h5>Postgresql</h5>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt='color sharp'/>
    </section>
  )
}
