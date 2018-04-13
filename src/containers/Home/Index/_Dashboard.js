import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility,
  Computer,
  Timer,
  AccountBalanceWallet
} from "material-ui-icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  // TasksCard,
  RegularCard,
  Table,
  ItemGrid
} from "../../../components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../../variables/charts";

import dashboardStyle from "../../../variables/styles/dashboardStyle";
import NodeMap from "./_NodeMap";
import Speedometer from "./_Speedometer";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={ContentCopy}
              iconColor="orange"
              title="NUMBER OF BLOCKS"
              description="499,103"
              small=""
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={AccountBalanceWallet}
              iconColor="green"
              title="NUMBER OF FRONTIERS"
              description="34,245"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Computer}
              iconColor="red"
              title="CONNECTED PEERS"
              description="75"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Timer}
              iconColor="blue"
              title="TX/SEC (30 MIN AVG)"
              description="+245"
            />
          </ItemGrid>
        </Grid>

        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className=""
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              }
              chartColor="green"
              title="Blocks"
              text={
                <span>
                  <span className={this.props.classes.successText}>
                    <ArrowUpward
                      className={this.props.classes.upArrowCardCategory}
                    />
                    55%
                  </span>{" "}
                  Blocks represent transactions in the network.
                </span>
              }
              statIcon={AccessTime}
              statText="Updated 4 minutes ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              }
              chartColor="orange"
              title="Frontiers"
              text="A frontier represents one account in a wallet."
              statIcon={AccessTime}
              statText="Updated 3 minutes ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              }
              chartColor="red"
              title="Nodes"
              text="Connected peers"
              statIcon={AccessTime}
              statText="Updated 3 minutes ago"
            />
          </ItemGrid>
        </Grid>

        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <Speedometer />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <Speedometer />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <Speedometer />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <Speedometer />
          </ItemGrid>
        </Grid>

        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <NodeMap />
          </ItemGrid>
        </Grid>

        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              headerColor="blue"
              cardTitle="Latest Transactions"
              cardSubtitle=""
              content={
                <Table
                  tableHeaderColor="warning"
                  tableHead={["Date", "Account", "Amount", "Hash"]}
                  tableData={[
                    [
                      "4/12/18 8:42:20pm",
                      "bus_3syazinpwa5qfew8uu77ga4gjh7mn1n7nge85qgpo7zfecrgwoqmnwzjzy5i",
                      "36,738",
                      "8E2C196901…"
                    ]
                  ]}
                />
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
