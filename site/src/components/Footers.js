import React, { Component } from "react";

export default class Footers extends Component {
  render() {
    return (
      <footer className="footer bg-secondary fixed-bottom p-2">
        <div className="container">
          <span className="text-white">
            Here Comes Footer, Some contact info, some social Links
          </span>
        </div>
      </footer>
    );
  }
}
