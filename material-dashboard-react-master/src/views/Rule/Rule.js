import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import MaterialTable from 'material-table';
import Link from "@material-ui/core/Link";
import Error from "@material-ui/icons/Error";
import Done from "@material-ui/icons/Done";
import { green } from '@material-ui/core/colors';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name',
      render: rowData =>
      <Link href="/admin/rule_detail">{rowData.name}</Link> },
      { title: 'Creator', field: 'creater' },
      { title: 'Last Modified', field: 'last_modified'},
      { title: 'Last Triggered', field: 'last_triggered'},
      { title: 'Status', field: 'status', 
      render: rowData =>
      <div>{rowData.status?<Done style={{ color: green[500] }}/>:<Error color="secondary"/>}</div>
    },
    ],
    data: [
      { name: 'Mehmet', creater: 'Baran', last_modified: 1987, last_triggered: 63, status: "Baran"},
      { name: 'Zerya Betül', creater: 'Baran', last_modified: 2017, last_triggered: 34, status: "Zerya"},
    ],
  });
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Rule Table</h4>
            <p className={classes.cardCategoryWhite}>
              Rule Table
            </p>
          </CardHeader>
          <CardBody>
          <MaterialTable
      title="Rule Table"
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
            
          </CardBody>
        </Card>
      </GridItem>
     
    </GridContainer>
  );
}
