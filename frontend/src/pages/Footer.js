import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
        <p>
            Created with <i class="fa fa-heart">
            </i> by <a target="_blank" rel="noreferrer" href="http://portfolio.binitutor.com"> BiniTutor</a>. 
            &copy; 2021 All rights reserved.
        </p>
        </div>
      </>
    );
  }
}

export default Footer;
