import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg';
import linkedinIcon from '../assets/img/linkedin.svg';
import githubIcon from '../assets/img/github.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (value) => {
    setActiveLink(value)
    const navbar = document.querySelector('#basic-navbar-nav')
    navbar.classList.remove('show')
    const toggler = document.querySelector('.navbar-toggler')
    toggler.classList.add('collapsed')
  }
  
  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='marcus logo' className='navbar-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleClick('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleClick('about')}>About</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleClick('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleClick('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleClick('contact')}>Contact</Nav.Link>
          </Nav>
        <Button className='resume-btn' target='_blank' href='https://drive.google.com/file/d/10gQXVItW45ByEP8BxKIM0v8wSad7g7I_/view?usp=sharing'>Resume</Button>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/marcus1220"><img src='https://i.ibb.co/XzwwgC4/linkedin.png' alt='linkedIn logo'/></a>
              <a target='_blank' rel="noreferrer" href="https://github.com/MarcusAdams1220"><img src={githubIcon} alt='Github logo'/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}