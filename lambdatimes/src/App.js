import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Carousel from './components/Carousel/Carousel';
import styled from 'styled-components';
import Login from './components/Login';
import Authenticate from './components/Authenticate';

const AppS = styled.div`
.width-100 {
  width: 100%;
}
.border-bottom-grey {
  border-bottom: 1px solid lightgrey;
}
@font-face {
  font-family: 'PT Sans';
  font-style: italic;
  font-weight: 400;
  src: local('PT Sans Italic'), local('PTSans-Italic'), url(https://fonts.gstatic.com/s/ptsans/v9/jizYRExUiTo99u79D0e0x8mN.ttf) format('truetype');
}
@font-face {
  font-family: 'PT Sans';
  font-style: italic;
  font-weight: 700;
  src: local('PT Sans Bold Italic'), local('PTSans-BoldItalic'), url(https://fonts.gstatic.com/s/ptsans/v9/jizdRExUiTo99u79D0e8fOydLxUY.ttf) format('truetype');
}
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  src: local('PT Sans'), local('PTSans-Regular'), url(https://fonts.gstatic.com/s/ptsans/v9/jizaRExUiTo99u79D0KEwA.ttf) format('truetype');
}
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  src: local('PT Sans Bold'), local('PTSans-Bold'), url(https://fonts.gstatic.com/s/ptsans/v9/jizfRExUiTo99u79B_mh0O6tKA.ttf) format('truetype');
}
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
}
#root {
  width: 100%;
}

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;

`

const Auth = Authenticate(Content);

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showLogin : false,
      loggedIn : false,
      username : "",
    }
  }
  componentDidMount() {
    if (localStorage.getItem("username")) {
      this.setState({loggedIn: true});
      this.setState({username:localStorage.getItem("username")});
    }
  }
  handleShowLogin = () => {
    this.setState({showLogin : !(this.state.showLogin)})
  }
  handleLogin = (event) => {
    event.preventDefault();
    this.setState({loggedIn : true, showLogin: false, username: event.target[0].value})
    localStorage.setItem("username",event.target[0].value);
  }
  handleLogout = (event) => {
    event.preventDefault();
    localStorage.clear();
    this.setState({loggedIn: false, username: '', showLogin: false});
  }
  render() {
    return (
      <AppS>
        <TopBar loginText={this.state.loggedIn ? "LOG OUT" : "LOG IN"} handleShowLogin={this.handleShowLogin} />
        { this.state.showLogin ? <Login username={this.state.username} handleLogout={this.handleLogout} handleLogin={this.handleLogin} loggedIn={this.state.loggedIn} handleShowLogin={this.handleShowLogin}/> : <div/>}
        <Header />
        <Carousel/>
        <Auth loggedIn={this.state.loggedIn}/>
      </AppS>
    );
  }
}

export default App;
