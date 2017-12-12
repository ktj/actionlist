import React, { Component } from 'react';
import { ActionList, Icons, Theme, ResponsiveProvider, Button } from 'hsl-shared-components';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

const itemsContainer = [
  {
    icon: <Icons.Tickets />,
    title: 'Liput ja hinnat',
    container: {
      component: Link,
      props: {
        to: '/liput-ja-hinnat',
      },
    }
  },
  {
    icon: <Icons.JourneyPlanner />,
    title: 'Reitit ja aikataulut',
    container: {
      component: Link,
      props: {
        to: '/reitit-ja-aikataulut',
      },
    }
  },
  {
    icon: <Icons.Bus />,
    title: 'Ohjeita ja tietoja',
    container: {
      component: Link,
      props: {
        to: '/ohjeita-ja-tietoja',
      },
    }
  },
];

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <ResponsiveProvider>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Button icon={<Icons.ArrowLeft />} onClick={()=>{}}>Nappi</Button>
            <ActionList
            items={itemsContainer}
          />
          </div>
        </ResponsiveProvider>
      </ThemeProvider>
    );
  }
}

export default App;
