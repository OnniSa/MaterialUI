import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const App = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='static'>
      <Toolbar>
          <Typography variant="h6" className={classes.title}>
            MaterialUI
          </Typography>
          <Button color="inherit">Linkki1</Button>
          <Button color="inherit">Linkki2</Button>
          <Button color="inherit">Linkki3</Button>
        </Toolbar>
      </AppBar>

    <Button size="large" variant="contained" color="primary">Shiiiit Bro</Button>
    <Button size="medium" variant="contained" color="primary">Shiiiit Bro</Button>
    <Button size="small" variant="contained" color="primary">Shiiiit Bro</Button>
    <button>shiit Brah html</button>
  </div>
  );
}

export default App;
