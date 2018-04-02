import React from "react";
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navWide">
          <div className="navWide">
            <li>
              <Link to = '/' > Home </Link>
            </li>
            <li>
              <a href="https://github.com/Quanluis">Github</a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/quanluis">freecodecamp</a>
            </li>
            <li>
            <Link to = '/about' > About </Link>
            </li>
            <li>
            <Link to = '/contact' > Contact </Link>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
