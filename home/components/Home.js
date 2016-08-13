import React from 'react'
import Modal from './Modal'
import { Button, Jumbotron, Grid, Row, Col } from 'react-bootstrap'

export default React.createClass({
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Jumbotron>
                <h1>Hello, world!</h1>
                <p>This is a simple React app with Ruby on Rails api calls.</p>
                <Modal />
              </Jumbotron>
            </Col>
          </Row>
        </Grid>

        <footer className="footer">
          <div className="container">
            <p className="text-muted">Place sticky footer content here.</p>
          </div>
        </footer>
      </div>
    )
  }
})
