import React from 'react';
import { List, ListItemText, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        margin: "100px 0 0 0",
    },
    listitem: {
        display: "inline-block",
        width: 150,
        textAlign: "right",        
    },
    
  });


const listitems = [
    {
        text:"Mainpage",
        id: 1
    },
    {
        text:"2:nd page",
        id: 2
    },
    {
        text:"3:rd page",
        id: 3
    },
    {
        text:"And So",
        id: 4
    },
    {
        text:"On",
        id: 5
    },
]

const MainNavigation = () => {
    const classes = useStyles();
    return (
        <div>
            <List component="nav">
                {listitems.map(item => (
                <ListItem className={classes.listitem} key={item.id}>
                    <ListItemText>
                        <Typography>
                            {item.text}
                        </Typography>
                    </ListItemText>
                </ListItem>
                ))}
            </List>


        </div>
    );
};

export default MainNavigation;