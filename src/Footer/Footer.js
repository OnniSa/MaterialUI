import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




import { makeStyles } from '@material-ui/styles';




const useStyles = makeStyles({
  root: {
    backgroundColor:"lightgray",
    width: '230px',
    padding: '20px',
    float: 'right'
  },
  footer: {
    backgroundColor:"green",

  },
  TextField: {
    display: 'block',
    margin: '10px'
    
  }
 
});

const Footer = () => {
    const classes = useStyles();
    return(
        <div className={classes.footer}>
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
            </form>
        </div>
    );
}

export default Footer;