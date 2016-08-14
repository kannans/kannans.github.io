import React from "react";
import FontAwesome from "react-fontawesome";
import {Image, Jumbotron, Row, Col} from "react-bootstrap";

export default React.createClass({
  render() {
    return (
        <Jumbotron>
          <Row className="show-grid">
            <Col xs={12} md={3}>
              <Image src="http://kannansv.in/assets/me.jpg" circle
                     responsive/>
              <Col xs={12} md={12} className="social-icons">
                <a href="http://in.linkedin.com/pub/kannan-sv/3a/693/71">
                  <FontAwesome
                    className='super-crazy-colors'
                    name='linkedin-square'
                    size='2x'
                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                  />
                </a>
                <a href="https://twitter.com/kannanhudson">
                  <FontAwesome
                    className='super-crazy-colors'
                    name='twitter-square'
                    size='2x'
                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                  />
                </a>
                <a href="https://github.com/kannans">
                  <FontAwesome
                    className='super-crazy-colors'
                    name='github-square'
                    size='2x'
                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                  />
                </a>
                <a href="skype:kannanhudson?userinfo">
                  <FontAwesome
                    className='super-crazy-colors'
                    name='skype'
                    size='2x'
                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                  />
                </a>
              </Col>
            </Col>
            <Col xs={12} md={7}>
              <header>
                <h1>Hi. I'm <strong>Kannan</strong>.</h1>
              </header>
              <p>
                Emergent Software Developer with IT work experience, holding
                knowledge of
                <strong> Ruby On Rails</strong>, ReactJS, AngularJS, HTML5,
                CSS3, JQuery, Responsive Design.
              </p>
            </Col>
          </Row>
        </Jumbotron>
    )
  }
})
