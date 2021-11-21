import "./header.css";
import logo from "../logo.svg";
import React, { Component } from "react";
import HeaderItem from "./headerItem";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  render() {
    return (
      <nav>
        <ul>
          <img src={logo} className="App-logo" alt="logo" />
          <HeaderItem item="Home" tolink="/">
            Home
          </HeaderItem>
          <HeaderItem item="Team" tolink="/team">
            Team
          </HeaderItem>
          <HeaderItem item="Player" tolink="/player">
            Player
          </HeaderItem>
        </ul>
      </nav>
    );
  }
}

export default Header;
