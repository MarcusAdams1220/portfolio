import React from 'react'
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import ProjectData from './ProjectData'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'

export const Projects = () => {
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>I've worked on a variety of projects both individually & in collaboration with other developers.</p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Solo</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Group</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Latest</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {
                      ProjectData.map((project, index) => {
                        if (project.type === 'Solo' || project.type2 === 'Solo') {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        }
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <Row>
                    {
                      ProjectData.map((project, index) => {
                        if (project.type === 'Group') {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        }
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <Row>
                    {
                      ProjectData.map((project, index) => {
                        if (project.type === 'Latest') {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        }
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>

          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt='background'></img>
    </section>
  )
}