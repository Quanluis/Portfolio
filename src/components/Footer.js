import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <li>
          <img src={require("../img/React.png")} alt="cannot display" />
        </li>
        <li>
          <img src={require("../img/nodejs.png")} alt="cannot display" />
        </li>
        <li>
          <img
            className="reactImg"
            src = {require('../img/reactrouter2.png')} 
            alt="cannot display"
          />
        </li>
        <li>
          <img src={require("../img/css3.png")} alt="cannot display" />
        </li>
      </div>
    );
  }
}
export default Footer;
