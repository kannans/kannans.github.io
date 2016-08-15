import React from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import axios from 'axios';

const requestSubUrl = 'http://localhost:8080/data/meta.json';

export default React.createClass({
    getInitialState: function() {
      return {
        projects: [],
        pageLoad: false
      }
    },

    componentDidMount: function() {
      var _this = this;
      const { langName } = this.props.params;

      this.serverRequest =
        axios
          .get(requestSubUrl)
          .then(function(result) {
            _this.setState({
              projects: result.data.languages
            });
          }).then(function () {
          _this.setState({
            pageLoad: true
          });
        }.bind(this));
    },

    renderLoadingView() {
      return (
        <div>
          Loading please wait...
        </div>
      );
    },

    render(){
      const projects = this.state.projects;
      if (!this.state.pageLoad) {
        return this.renderLoadingView();
      }
      return (
        <Row>
          {projects.map(function(project) {
            return <Col key={project} xs={6} md={4}>
              <Thumbnail src="http://www.webascender.com/portals/0/Images/Services/logo-rails.jpg" alt="242x200">
                <h3>{project}</h3>
              </Thumbnail>
            </Col>
          })}
          {this.props.children}
        </Row>
      )
    }
  }
);