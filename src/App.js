import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    video: "closed"
  }

  openVideo = () => {
    this.setState({video: "open"})
  }

  closeVideo = () => {
    this.setState({video: "closed"})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='/gintonic.png' className="App-logo" alt="logo" onClick={this.openVideo}/>
            <video id="introvid" className={this.state.video} onClick={this.closeVideo} controls>
              <source src="/video/introvid.mp4" type="video/mp4"/>
              <source src="/video/introvid.ogg" type="video/ogg"/>
            Shucks, your browser doesn't support this... Please enjoy the gin though!
            </video>
          <p>
            <code>The Gingertonic Studios</code><br/>
            <code>// coming soon</code>
          </p>

          <div id='socials'>
            <a
              className="App-link"
              href="https://twitter.com/GingertonicSt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social" src='/socials/twitter.svg' alt="twitter"/>
            </a>
            <a
              className="App-link"
              href="https://github.com/Gingertonic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social" src='/socials/github.svg' alt="github"/>
            </a>
            <a
              className="App-link"
              href="https://www.youtube.com/playlist?list=PLbVocVe1GMcGyumY0oPHLfiQQTBl8-6Tg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social" src='/socials/youtube.svg' alt="youtube"/>
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
