import React from 'react'
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import NavLink from "./NavLink"
import axios from 'axios'

const requestUrl = 'http://kannansv.in/data/meta.json';

export default React.createClass({
    getInitialState: function() {
      return {
        languages: []
      }
    },

    contextTypes: {
      router: React.PropTypes.object
    },

    componentDidMount: function() {
      var _this = this;
      this.serverRequest =
        axios
          .get(requestUrl)
          .then(function(result) {
            console.log(result);
            _this.setState({
              languages: result.data.languages
            });
          });
      this.context.router.push('/works/rails/');
    },

    componentWillUnmount: function() {
    },

    render(){
      const results = this.state.languages;
      return (
        <div>
          <div className="about-me contact-me">
            <header className="text-center">
              <h2>My Works</h2>
            </header>
            <Row className="show-grid">
              <Col xs={1} md={2}>
                <ListGroup>
                  {results.map(function(job) {
                    return <NavLink key={job.id} to={"/works/"+ job.id} className="list-group-item">{job.name}</NavLink>
                  })}
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