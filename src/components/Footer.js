import React from 'react'
import logo from '../assets/img/logo.svg'
import linkedinIcon from '../assets/img/linkedin.svg';
import githubIcon from '../assets/img/github.svg';
import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='align-items-center footer-logo-row'>
          <Col sm={6}>
            <img src={logo} alt='logo'/>
          </Col>
          <Col sm={6} className='text-center footer-icons'>
            <p>This portfolio was created using React</p>
            <div className="social-icon footer-icon">
              <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/marcus-g-adams"><img src={linkedinIcon} alt="icon" /></a>
              <a target='_blank' rel="noreferrer" href="https://github.com/MarcusAdams1220"><img src={githubIcon} alt="icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
