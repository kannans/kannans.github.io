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
      </div>
    )
  }
})
