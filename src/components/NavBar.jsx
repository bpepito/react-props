import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    const {totalCount} = this.props;
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
          <span className="badge bg-secondary ms-2">
            {totalCount}
          </span>
        </div>
      </nav>
    );
  }
}


