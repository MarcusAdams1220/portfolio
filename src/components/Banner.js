import { useState, useEffect } from 'react'
import { Col, Container, Row, Nav } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import 'animate.css'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const toRotate = ['Full Stack Developer    ', 'Based In Melbourne    ']

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
            <p>I've always been a logical thinker with a creative side. So naturally, when I first dipped my toes into the waters of web development, my eyes were opened to a world of endless possibilities. Nowadays, nothing makes me happier than taking an idea in my head & bringing it to life through code! </p>
            <Nav.Link href='#contact' className='connect-btn'>Let's Connect <ArrowRightCircle size={25}/></Nav.Link>
          </Col>
          <Col xs={12} med={6} xl={5}>
            <img src={headerImg} alt='header img'/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}