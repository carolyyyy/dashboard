/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Warning from "@material-ui/icons/Warning";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import MaterialTable from 'material-table';
import { green, red } from '@material-ui/core/colors';
// core components
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

export default function Icons() {
  const classes = useStyles();
  const [value, setValue] = React.useState("detail");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [state, setState] = React.useState({
    columns: [
      { title: 'By', field: 'by' },
      { title: 'Time', field: 'time' },
      { title: 'Pass', field: 'pass',
      render: rowData =>
    <div style={{ color: green[500] }}>{rowData.pass}</div>},
      { title: 'Fail', field: 'fail',
      render: rowData =>
      <div style={{ color: red[500] }}>{rowData.fail}</div>},
    
    ],
    data: [
      { by: 'Mehmet', time: 1987, pass: 63, fail: 0},
      { by: 'Zerya Betül',  time: 2017, pass: 34, fail: 0},
    ],
  });
  return (
    <div>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label="Detail" value="detail"/>
        <Tab label="Trigger" value="trigger"/>
      </Tabs>
    <TabPanel value={value} index="detail">
    <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="info">
                <Icon>content_copy</Icon>
              </CardIcon>
              <br></br>
              <h4 className={classes.cardTitle}>
                 Scenario
              </h4>
            </CardHeader>
            <CardBody>
              <p className={classes.cardTitle}>
                item1:
              </p>
              <p className={classes.cardTitle}>
                item2:
              </p>
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}>
                
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <br></br>
              <h4 className={classes.cardTitle}>
                 Scenario
              </h4>
            </CardHeader>
            <CardBody>
              <p className={classes.cardTitle}>
                item1:
              </p>
              <p className={classes.cardTitle}>
                item2:
              </p>
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}>
                
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        </GridContainer>
  </TabPanel>
  <TabPanel value={value} index="trigger">
  <MaterialTable
      title="Trigger Table"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  </TabPanel>
  </div>
  );
}
