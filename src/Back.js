import React, { Component } from 'react';
import { Theme, ResponsiveProvider } from 'hsl-shared-components';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router';

class Back extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <ResponsiveProvider>
          <div className="App">
            <Link to="/">hep hep</Link>
          </div>
        </ResponsiveProvider>
      </ThemeProvider>
    );
  }
}

export default Back;
