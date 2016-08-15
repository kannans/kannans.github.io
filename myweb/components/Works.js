import React from 'react'
import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import NavLink from "./NavLink"
import axios from 'axios'

const requestUrl = 'http://kaapi.herokuapp.com/languages?t=xxyyzz';

export default React.createClass({
    getInitialState: function() {
      return {
        languages: [],
        load: false
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
            _this.setState({
              languages: result.data
            });
          }).then(function () {
            _this.setState({
              load: true
            });
            const path = `/works/1`;
            this.context.router.push(path);
        }.bind(this));
    },

    componentWillUnmount: function() {
    },

    renderLoadingView() {
      return (
        <div>
          Loading please wait...
        </div>
      );
    },

    render(){
      const results = this.state.languages;

      if (!this.state.load) {
        return this.renderLoadingView();
      }
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