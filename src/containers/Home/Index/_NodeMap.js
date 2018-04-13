import React from "react";
import { observer, inject } from "mobx-react";
import { withStyles } from "material-ui/styles";
import RegularCard from "../../../components/Cards/RegularCard";
import { VectorMap } from "react-jvectormap";

const styles = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  }
});

class NodeMap extends React.Component {
  componentDidMount() {
    // this.props.block.loadBlockCount();
  }

  render() {
    const { classes } = this.props;
    const plants = [
      { latLng: [52.5, 13.39], name: "Berlin" },
      { latLng: [39.54005292, 115.789976], name: "Beijing" },
      { latLng: [23.1449813, 113.3250101], name: "Guangzhou" },
      { latLng: [31.21645245, 121.4365047], name: "Shanghai" }
    ];
    return (
      <RegularCard
        headerColor="blue"
        cardTitle="Node Stats"
        cardSubtitle="Connected peers over the world"
        content={
          <div style={{ width: "100%", height: 500 }}>
            {/*
                    labels={{
                      markers: {
                        render: function(index) {
                          return plants[index].name;
                        },
                        offsets: function(index) {
                          var offset = plants[index]["offsets"] || [0, 0];

                          return [offset[0] - 7, offset[1] + 3];
                        }
                      }
                    }}
                  */}
            <VectorMap
              map={"world_mill"}
              markers={plants}
              markerStyle={{
                initial: {
                  fill: "#F57F17"
                },
                selected: {
                  fill: "#CA0020"
                }
              }}
              regionStyle={{
                initial: {
                  fill: "#2962FF"
                },
                selected: {
                  fill: "#3f51b5"
                }
              }}
              backgroundColor=""
              ref="map"
              containerStyle={{
                width: "100%",
                height: "100%"
              }}
              containerClassName="map"
            />
          </div>
        }
      />
    );
  }
}

export default withStyles(styles)(inject("block")(observer(NodeMap)));
