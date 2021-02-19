import React from "react";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSave, faQuestionCircle, faSignOutAlt, faPrint, faSlidersH } from '@fortawesome/free-solid-svg-icons'

//library.add(faCoffee)

const Header = () => {
  return (
    <div className="header">
        <h4 className="header-title">Diagnostic Tool</h4>
      <div className="header-wrapper">
        <h6 className="header-user-account">Logged in as General User</h6>
        <ul className="header-icons">
          <li>
          <FontAwesomeIcon icon={faSlidersH} color="white"/>
          </li>
          <li><FontAwesomeIcon icon={faSave} color="white"/></li>
          <li><FontAwesomeIcon icon={faPrint} color="white"/></li>
          <li><FontAwesomeIcon icon={faQuestionCircle} color="white"/></li>
          <li><FontAwesomeIcon icon={faSignOutAlt} color="white"/></li>
          
        </ul>
        </div>
    </div>
  );
};

export default Header;
