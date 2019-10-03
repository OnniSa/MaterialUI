import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import BottomNavigation from '../BottomNavigation/BottomNavigation';


const useStyles = makeStyles({
  root: {
    backgroundColor:"lightgray",
    width: '230px',
    padding: '20px',
    float: 'right'
  },
  footer: {
    backgroundColor:"lightgray",
    width: '100%',
    float: 'right',
    padding: '10px',
    marginTop: '10px'
  },
  links: {
    backgroundColor:"lightgray",
    width: '50%',
    float: 'left',
  },
  
  TextField: {
    display: 'block',
    marginBottom: '10px'
    
  }
 
});

const Footer = () => {
    const classes = useStyles();
    return(
        
        <div className={classes.footer}>
        <div className={classes.links}>
            <BottomNavigation />
        </div>    
            <form className={classes.root}>
                <TextField className={classes.TextField} label="Nimi"> lollers</TextField>
                <TextField className={classes.TextField} type="phone" label="Puhelin"> lollers</TextField>
                <TextField required className={classes.TextField} type="email" label="Email"> lollers</TextField>
                <TextField variant="outlined" required className={classes.TextField} type="password" label="No mutta miksi ei?"> lollers</TextField>
                <RadioGroup>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="confused" control={<Radio />} label="I'm confused" />
                </RadioGroup>
                <RadioGroup>
                    <FormControlLabel value="insane" control={<Checkbox />} label="Insane" />
                </RadioGroup>
                <Button variant="contained" color="secondary">Submit</Button>
            </form>
        </div>
    );
}

export default Footer;