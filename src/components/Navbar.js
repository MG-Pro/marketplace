import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <div className=""></div>
        <ul className="navbar-nav px-3 float-right">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block text-right">
            <small className="text-white "><span id="account">
              Address: {this.props.account.account} <br/>
              Balance: {this.props.account.balance}
            </span></small>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
