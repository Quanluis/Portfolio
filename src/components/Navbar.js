import React from "react";
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navWide">
          <div>
            <li className = "current">
              <Link to = '/' > Home </Link>
            </li>
            <li className="current">
              <a href="https://github.com/Quanluis">Github</a>
            </li>
            <li className="current">
              <a href="https://www.freecodecamp.org/quanluis">freecodecamp</a>
            </li>
            <li className="current">
            <Link to = '/about' > About </Link>
            </li>
            <li className="current">
            <Link to = '/contact' > Contact </Link>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
