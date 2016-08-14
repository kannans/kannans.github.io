import React from 'react'
import { Table } from 'react-bootstrap'

export default React.createClass({
    render() {
      return (
        <div>
          <Table striped bordered condensed hover>
            <caption className="text-center"><h4>My Specialties </h4></caption>
            <tbody>
            <tr>
              <td className="tl">Languages </td>
              <td className="lang"> Ruby, Python, Javascript</td>
            </tr>
            <tr>
              <td className="tl">Web Tech</td>
              <td className="lang"> Ruby On Rails 3+, Dijango, HTML5, HAML, CSS3, SASS, Jquery, Ajax, CoffeeScript</td>
            </tr>
            <tr>
              <td className="tl">JS Framwork</td>
              <td className="lang"> ReactJS, AngularJS, EmberJS, MeteorJS</td>
            </tr>
            <tr>
              <td className="tl">API</td>
              <td className="lang"> Custom API, Grapes, API-Pie. </td>
            </tr>
            <tr>
              <td className="tl">Source Code</td>
              <td className="lang"> Git, Git-flow, Github, Bitbuket.</td>
            </tr>
            <tr>
              <td className="tl">DBMS</td>
              <td className="lang"> Postgresql, MySql, SQlite, MongoDB.</td>
            </tr>
            <tr>
              <td className="tl">BDD </td>
              <td className="lang"> Rspec, Capybara, FactoryGirl, Jasmine</td>
            </tr>
            <tr>
              <td className="tl">Web server</td>
              <td className="lang"> Node, Nginx, Puma, Webrick, Unicorn, Thin.</td>
            </tr>
            <tr>
              <td className="tl">Cloud</td>
              <td className="lang"> Heroku, Amazon EC2, Bluehost, DigitalOcean.</td>
            </tr>
            <tr>
              <td className="tl">Deployment Tools</td>
              <td className="lang"> Capistrano3, Docker.</td>
            </tr>
            <tr>
              <td className="tl">Omniauth</td>
              <td className="lang"> Facebook, Gmail, Twitter, Linkedin.</td>
            </tr>
            <tr>
              <td className="tl">Mobile Tech</td>
              <td className="lang"> Ionic Framework, PhoneGap, JQuery Mobile.</td>
            </tr>
            <tr>
              <td className="tl">CMS</td>
              <td className="lang"> Custom CMS, Refinary CMS, Rails admin, Active admin.</td>
            </tr>
            <tr>
              <td className="tl">E-commerce</td>
              <td className="lang"> Custom eCommerce, Spree, ROR-E.com.</td>
            </tr>
            </tbody>
          </Table>
        </div>
      )
    }
  });