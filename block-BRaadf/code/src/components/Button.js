import React, { useContext } from 'react';
import ModeContext from './ModeContext';
export default function SwitchButton() {
  const Mode = useContext(ModeContext);
  return (
    <button
      className={`btn ${Mode.isDarkMode ? 'btn-dark' : 'btn-light'}`}
      onClick={Mode.changeMode}
    >
      {Mode.isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
