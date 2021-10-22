import React, { useContext } from 'react';
import SwitchButton from './Button';
import Header from './Header';
import Main from './Main';
import ModeContext from './ModeContext';

function All() {
  const Mode = useContext(ModeContext);
  return (
    <div className={`bg ${Mode.isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <Header />
      <Main />
      <SwitchButton />
    </div>
  );
}
export default All;
