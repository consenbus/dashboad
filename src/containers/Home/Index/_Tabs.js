import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Typography from "material-ui/Typography";
import BlurOnIcon from "material-ui-icons/BlurOn";
import MapIcon from "material-ui-icons/Map";
import InsertChartIcon from "material-ui-icons/InsertChart";

const styles = theme => ({
  root: {}
});

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="CONSENBUS" icon={<BlurOnIcon />} />
            <Tab label="Node Map" icon={<MapIcon />} />
            <Tab label="Tx" icon={<InsertChartIcon />} />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
