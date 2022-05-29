import { Component } from "react";

class ClassStateCom extends Component {
  constructor(props) {
    super(props);
    this.state = { type: "Password" };
    this.handler = (event) => {
      let { checked } = event.target;
      if (checked) {
        this.setState({ type: "Text" });
      } else {
        this.setState({ type: "Password" });
      }
    };
  }
  render() {
    return (
      <>
        <input type={this.state.type} />
        <input type="checkbox" onClick={this.handler} />
        Show Password
      </>
    );
  }
}

export default ClassStateCom;
