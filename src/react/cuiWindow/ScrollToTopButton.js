import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  };

  return (
    <button className="top-button"><FontAwesomeIcon icon={faArrowUp} onClick={handleClick}/></button>
  );
}

export default ScrollToTopButton;