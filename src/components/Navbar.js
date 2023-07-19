import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand mx-2" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">{props.about}</Link>
      </li>
    </ul>
  </div>
    <div className={`mx-2 form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>{/*Setting the dark mode condition for switch*/}
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
    </div>
</nav>
)
}

// The below one is set only for the check that may be we can't send numbers instead of strings from "App.js"
Navbar.propTypes = {
//title: PropTypes.string.isRequired, // By writing "isRequired" we say that if we don't pass title and don't write the default props then we get an error
title: PropTypes.string,
about: PropTypes.string
}

// The below props set when we don't pass props from the "App.js" file
Navbar.defaultProps = {
title: 'Set title here',
about: 'Set About here'
}