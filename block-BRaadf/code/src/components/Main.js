import Banner from './Banner';
import Cards from './Cards';
import Paragraph from './Paragraph';
import Title from './Title';
import React, { useContext } from 'react';
import ModeContext from './ModeContext';
function Main() {
  const Mode = useContext(ModeContext);
  return (
    <>
      <Title text='Text Component' isDarkMode={Mode.isDarkMode} />
      <Paragraph isDarkMode={Mode.isDarkMode} />
      <Title text='Card Component' isDarkMode={Mode.isDarkMode} />
      <Cards />
      <Title text='Banner Component' isDarkMode={Mode.isDarkMode} />
      <Banner isDarkMode={Mode.isDarkMode} />
    </>
  );
}

export default Main;
