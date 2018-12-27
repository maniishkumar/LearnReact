import React from "react";
import { Button } from "react-bootstrap";

class RefComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.getRef = this.getRef.bind(this);
  }
  getRef() {
    console.log(this.myRef.current);
  }
  render() {
    return [
      <div>
        <div ref={this.myRef}>
          <p>These text are under myref</p>
        </div>
        <Button bsStyle="primary" onClick={this.getRef}>
          Show ref
        </Button>
      </div>
    ];
  }
}

export default RefComponent;
