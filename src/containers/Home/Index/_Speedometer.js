import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import ReactSpeedometer from "react-d3-speedometer";
import RegularCard from "../../../components/Cards/RegularCard";

const styles = theme => ({
  root: {}
});

class Speedometer extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <RegularCard
        headerColor="grey"
        cardTitle="Transaction Rate"
        cardSubtitle="Blocks Per Second"
        content={
          <div style={{ width: "100%", height: "200px" }}>
            <ReactSpeedometer fluidWidth={true} />
          </div>
        }
      />
    );
  }
}

Speedometer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Speedometer);
