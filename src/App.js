import React, { Component } from 'react';
import { ActionList, Icons, Theme, ResponsiveProvider, Button, TextInput, ToggleButton } from 'hsl-shared-components';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
const Palikka = styled.div`
  width: 800px;
  height: 50px;
  background: blue;
`;
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
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => {
      const toggled = !prevState.toggled;
      return { toggled };
    });
  }

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <ResponsiveProvider>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <ToggleButton
              checked={this.state.toggled}
              title={'vähän tekstiä'}
              onClick={this.toggle}
            />
            <span>Lisää tekstiä</span>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <TextInput
              enableStatusIcon
              errorMsg="Very descriptive error message!"
              id="example"
              label="Label"
              placeholder="placeholder"
              prefix=""
              statusIcon={<Icons.CircleCheckmark />}
            />
            <Button icon={<Icons.ArrowLeft />} onClick={()=>{}}>Nappi</Button>
            <ActionList
              items={itemsContainer}
              horizontal
            />
            <Palikka />
            <div>
              {this.props.children}
            </div>
          </div>
        </ResponsiveProvider>
      </ThemeProvider>
    );
  }
}

export default App;
