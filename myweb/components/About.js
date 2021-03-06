import React from 'react'
import Specialities from './Specialities'
import {Row, Col} from 'react-bootstrap'

export default React.createClass({
    render(){
      return (
        <div className="about-me">
          <header className="text-center">
            <h2 className="text-center">About Me</h2>
          </header>
          <Row className="show-grid">
            <Col xs={12} md={5}>
              <p>
                Hello, I’m Kannan. I’m a Software Engineer, FullStack web developer in India. 5+ Year's of experience with developing fast and reliable web applications using Ruby On Rails and also using ReactJS, AngularJS, EmberJS, HTML5, CSS3 and Responsive. Please checkout my work area.
              </p>
              <p>
                I have completed My Bachelor Of Engineering in Computer Science and Engineering at Vickram College of Engineering / Anna University Trichy @ 2011.
              </p>
              <p>
                My hobbies is  developing awesome Sass application, playing Guitar,  problem solving, reading books, browsing and designing web pages. I like to play Football, Computer games, Chatting with friends, Long Travels,  Swimming, Photography, Researching about unbelievable things.
              </p>
            </Col>
            <Col xs={12} md={7}>
              <Specialities />
            </Col>
            </Row>
        </div>
      )
    }
  }
);