import React from 'react';
import All from './All';
import ModeContext from './ModeContext';
class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };

  render() {
    let { isDarkMode } = this.state;
    return (
      <>
        <ModeContext.Provider
          value={{ isDarkMode: isDarkMode, changeMode: this.changeMode }}
        >
          <All isDarkMode={isDarkMode} changeMode={this.changeMode} />
        </ModeContext.Provider>
      </>
    );
  }
}

export default App;
