import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <section className="Header-section">
        Starter Kit
        <Link to="/"> Home </Link>
        <Link to="/test"> Test </Link>
      </section>
    );
  }
}

export default Header;
