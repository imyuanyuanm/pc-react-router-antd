import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './Example2.scss';

// @Form.create()
export class Example2 extends Component {
  render() {
    return (
      <div className="Example">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Link to="/Example" className="pure-menu-link"><Button>this is Example2, click to Example</Button></Link>
          </p>
        </header>
      </div>
    );
  }
}

