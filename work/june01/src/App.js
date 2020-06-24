import React, { Component } from 'react';
import List01 from './components/List01';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles'; 

const styles = theme => ({
  root: {
  width: "100%",
  marginTop: theme.spacing.unit * 3,
  overflowX: "auto"
  },
  table: {
  minWidth: 1080
  }
  }); 

const listdata = [
  {
  'title' : 'Files1',
  'data01' : '2020.01',
  'data02' : '2020.02',
  'data03' : '2020.03'
  },
  {
    'title' : 'Files2',
    'data01' : '2022.01',
    'data02' : '2022.02',
    'data03' : '2022.03'
    }
 ]

class App extends Component{
  render(){
    const { classes } = this.props;
    return(
      <Paper className = {classes.root}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>data01</TableCell>
            <TableCell>data02</TableCell>
            <TableCell>data03</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {listdata.map(c=>{
              return <List01 key={c.title} title={c.title} data01={c.data01} data02={c.data02} data03={c.data03} />
            })} 
          </TableBody>
        </Table>
       </Paper>
 

    )
  }
}
export default withStyles(styles)(App);
