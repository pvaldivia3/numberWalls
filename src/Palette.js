import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles";
import { CropPortrait } from "@material-ui/icons";
// import seedColors from "./seedColors";


class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
  }
  render() {
    console.log(this.props.colors)
    var colorBoxes = this.props.colors.map(color => {return (<ColorBox background={color.color} />);});
    return (<div className="Palette">
      <div className="Palette-colors">
        {colorBoxes}
      </div>
    </div>);
  }
}
export default withStyles(styles)(Palette);
