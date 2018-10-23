import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
  const bugIcon = <FontAwesomeIcon icon={faBug} size="lg" />
  return (
    <div>
        <h3 className="not-found-num">404</h3>
        <span className="bug-icon">{bugIcon}</span>
        <h5 className="not-found-text">Sorry, page not found</h5>
    </div>
  );
}
export default NotFound;
