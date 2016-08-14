import React from 'react'
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import NavLink from "./NavLink"

export default React.createClass({
    render(){
      return (
        <div>
          <div className="about-me contact-me">
            <header className="text-center">
              <h2>My Works</h2>
            </header>
            <Row className="show-grid">
              <Col xs={1} md={2}>
                <ListGroup>
                  <NavLink to="/works/rails" className="list-group-item">Ruby On Rails</NavLink>
                  <NavLink to="/works/ruby" className="list-group-item">Ruby</NavLink>
                  <NavLink to="/works/reactjs" className="list-group-item">React JS</NavLink>
                  <NavLink to="/works/angularjs" className="list-group-item">Angular JS</NavLink>
                  <NavLink to="/works/emberjs" className="list-group-item">Ember JS</NavLink>
                  <NavLink to="/works/python" className="list-group-item">Python</NavLink>
                  <NavLink to="/works/mobile" className="list-group-item">Mobile Apps</NavLink>
                </ListGroup>
              </Col>
              <Col xs={1} md={10}>
                {this.props.children}
              </Col>
              </Row>
          </div>
        </div>
      )
    }
  }
);