import React from "react";
import ReactDOM from "react-dom";
import { Jumbotron, PageHeader } from "react-bootstrap";

import MenuBar from "./../MenuBar/MenuBar";

class Header extends React.Component {
  render() {
    return [
      <div>
        <PageHeader>Learn React</PageHeader>;
        <MenuBar />
        <h3>Journey to learn react starts here!!</h3>
      </div>
    ];
  }
}

export default Header;
