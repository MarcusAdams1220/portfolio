import { useState, useEffect } from 'react'
import { Col, Container, Row, Nav } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import headshotImg from '../assets/img/headshot.jpeg'
import 'animate.css'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const toRotate = ['Web Developer    ', 'Web Designer    ', 'Full Stack    ', 'Melbourne Based    ']

  async function tick () {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updateText)
    
    if(!isDeleting && updateText === fullText) {
      setIsDeleting(true)
    }
    if (isDeleting && updateText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, 100)

    return () => { clearInterval(ticker) }
  }, [text])

  return (
    <section className="banner" id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} med={6} xl={7}>
            <span className="tagline">Welcome To My Portfolio</span>
            <h1>Hi, I'm Marcus</h1>
            <h2><span className="wrap"> <span className='plain-txt-tag'>&lt;h2&gt;</span>  {text} | <span className='plain-txt-tag'>&lt;/h2&gt;</span></span></h2>
            <p>In the vast universe of coding, my mission (as I've chosen to accept it) is to gain a deep understanding of languages & frameworks so that I can use my skills to positively impact the world & make one giant leap for mankind.</p>
            <Nav.Link href='#about' className='learn-about-me-btn'>Learn About Me <ArrowRightCircle size={25}/></Nav.Link>
          </Col>
          <Col xs={12} med={6} xl={5}>
            <img src={headerImg} alt='header img' className='astro-img'/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}