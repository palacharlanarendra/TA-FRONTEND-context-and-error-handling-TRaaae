import React, { useContext } from 'react';
import ModeContext from './ModeContext';
function Header() {
  const Mode = useContext(ModeContext);
  // console.log(Mode, 'here');
  return (
    <h1
      className={`heading ${
        Mode.isDarkMode ? 'heading-dark' : 'heading-light'
      }`}
    >
      {Mode.isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </h1>
  );
}

export default Header;
