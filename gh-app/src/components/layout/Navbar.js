import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {

  const { title } = props;

  return (
    <nav className="navbar bg-primary">
      <h1>
      <FontAwesomeIcon icon={faGlobe} size="xs" />
      {' '}{title}
      </h1>
    </nav>
  )
}

export default Navbar
