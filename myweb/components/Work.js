import React from 'react'
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'
export default React.createClass({
    render() {
      const { langName } = this.props.params;
      return (
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="http://www.webascender.com/portals/0/Images/Services/logo-rails.jpg" alt="242x200">
              <h3>{langName}</h3>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="http://www.webascender.com/portals/0/Images/Services/logo-rails.jpg" alt="242x200">
              <h3>{langName}</h3>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="http://www.webascender.com/portals/0/Images/Services/logo-rails.jpg" alt="242x200">
              <h3>{langName}</h3>
            </Thumbnail>
          </Col>
        </Row>
      )
    }
  }
);