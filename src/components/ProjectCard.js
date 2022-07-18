import React from 'react'
import { Col, Button } from 'react-bootstrap'

export const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={image} alt={title}/>
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
          <br /> <br />
          <Button target={link === '.' ? '' : '_blank' } href={link} variant='light' className='view-project-btn'>View Project</Button>
        </div>
      </div>
    </Col>
  )
}
