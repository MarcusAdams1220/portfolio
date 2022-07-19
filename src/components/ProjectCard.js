import React from 'react'
import { Col, Button } from 'react-bootstrap'
import githubIcon from '../assets/img/github.svg';

export const ProjectCard = ({ title, description, image, appLink, githubLink }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={image} alt={title}/>
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
          <br /> <br />
          <Button target={appLink === '.' ? '' : '_blank' } href={appLink} variant='light' className='proj-btn'>View Project</Button>
          <Button target='_blank' href={githubLink} variant='dark' className='proj-btn'>&lt; View Code /&gt;</Button>
        </div>
      </div>
    </Col>
  )
}
