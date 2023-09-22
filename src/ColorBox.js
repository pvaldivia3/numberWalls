import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ColorBoxStyles";
import './styles/ColorBox.css'

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const {
      background,
    } = this.props;

    return(
      <div style={{background: this.props.background}} className='ColorBox'>
        <span>{this.props.numValue}</span>
        {/* <span>MORE</span> */}

      </div>
    );
  }
}
export default withStyles(styles)(ColorBox);
