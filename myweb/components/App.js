import React from "react";
import NavBar from "./Header";
import { Grid } from "react-bootstrap";

export default React.createClass({
  render() {
    return (
      <div>
        <Grid>
          <NavBar />
          {this.props.children}
        </Grid>
        <footer className="footer">
          <div className="container">
            <p className="text-muted">© 2016 Kannansv.in. All Rights
              Reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
})
