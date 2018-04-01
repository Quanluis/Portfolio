import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navWide">
          <div className="navWide">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="https://github.com/Quanluis">Github</a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/quanluis">freecodecamp</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
