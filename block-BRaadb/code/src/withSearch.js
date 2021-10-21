import React, { Component } from 'react';
const withSearch = (Component, data) => {
  return class extends React.Component {
    state = {
      searchTerm: '',
    };
    handleChange = ({ target: { value } }) => {
      this.setState({ searchTerm: value });
    };
    render() {
      let filteredData = data.filter((elem) =>
        elem.title
          ? elem.title.toLowerCase().includes(this.state.searchTerm)
          : elem.name.toLowerCase().includes(this.state.searchTerm)
      );
      return (
        <div>
          <Component
            filteredData={filteredData}
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  };
};

export default withSearch;
