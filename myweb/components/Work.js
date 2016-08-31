import React from 'react';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';
import axios from 'axios';

export default React.createClass({
    getInitialState: function() {
      return {
        projects: [],
        pageLoad: false,
        projectId: "",
      }
    },

    renderLoadingView() {

      return (
        <div>
          Loading please wait...
        </div>
      );
    },

    fetchData(id){
      var _this = this;
      const langName = id;
      var requestUrl = `http://kaapi.herokuapp.com/languages/${langName}/projects?t=xxyyzz`;
      this.serverRequest =
        axios
          .get(requestUrl)
          .then(function(result) {
            _this.setState({
              projects: result.data,
              projectId: langName
            });
          }).then(function () {
          _this.setState({
            pageLoad: true
          });
        }.bind(this));
    },

    getProjects() {
      const {langName} = this.props.params;
      const id  = this.state.projectId;
      if (langName !== id) {
        this.setState({ pageLoad: false, projectId: langName});
        this.fetchData(langName)
      }
    },

    render(){
      const projects = this.state.projects;

      this.getProjects();

      if (!this.state.pageLoad) {
        return this.renderLoadingView();
      }
      return (
        <Row>
          {projects.map(function(project) {
            return <Col key={project.id} xs={6} md={4}>
              <Thumbnail src={project.image_url} alt="242x200">
                <h3>{project.name}</h3>
              </Thumbnail>
            </Col>
          })}
          {this.props.children}
        </Row>
      )
    }
  }
);