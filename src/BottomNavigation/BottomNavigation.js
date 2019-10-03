import React from 'react';
import { List, ListItemText, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        margin: "100px 0 0 0",
    },
    listitem: {
        width: 150,
        textAlign: "left",
        paddingLeft: "25px",
        paddingTop: "15px"        
    },
    
  });


const listitems = [
    {
        text:"Linkki",
        id: 1
    },
    {
        text:"Lisalinkki",
        id: 2
    },
    {
        text:"MoarLinks",
        id: 3
    },
]

const BottomNavigation = () => {
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

export default BottomNavigation;