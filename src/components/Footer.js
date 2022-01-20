import React, { Component } from "react";

class Footer extends Component {
  year = () => {
    let d = new Date();
    return d.getFullYear();
  };

  render() {
    return (
      <footer className="footer">
        <p>
          {" "}
          <em>
            {" "}
            &copy; {this.year()} Project-<span>react</span>-app{" "}
          </em>
        </p>
      </footer>
    );
  }
}

export default Footer;