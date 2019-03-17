import React, { Component } from 'react';
import Socials from './components/Socials';
import Video from './components/Video';
import Nav from './components/Nav';
import About from './components/About';
import MainPage from './components/MainPage';
import Resume from './components/Resume';
import Projects from './containers/Projects';
import Words from './components/Words';
import './App.css';

class App extends Component {
  state = {
    video: "closed",
    view: "Home"
  }

  openVideo = () => {
    this.setState({video: "open"})
  }

  closeVideo = () => {
    this.setState({video: "closed"})
  }

  switchView = view => {
    this.setState({ view })
  }

  routeInnerView = () => {
    let view;
    switch(this.state.view){
      case "Home": view = <MainPage openVideo={this.openVideo} />; break;
      case "Writing": view = <Words />; break;
      case "Coding": view = <Projects />; break;
      case "Resume": view = <Resume />; break;
      case "About": view = <About />; break;
      default: return null;
    }
    return view
  }

  render() {
    return (
      <div className="App">
        <Nav switchView={this.switchView} />
        <Video state={this.state.video} close={this.closeVideo}/>
        <div id="inner-view">
          {this.routeInnerView()}
        </div>
        <Socials />
      </div>
    );
  }
}

export default App;
