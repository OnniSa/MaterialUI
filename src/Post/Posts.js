import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Typography, CardHeader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const postitems = [
    {
        title: "postaus 1",
        image: "https://im.mtv.fi/image/5816930/landscape16_9/1024/576/d4c5bad8f40ea43d593403577776cd34/ZX/pihvi-kyljys-entrecote.jpg",
        text: "Pihvi",
        id: 1
    },
    {
        title: "postaus 2",
        image: "https://im.mtv.fi/image/6573782/landscape16_9/1024/576/12eae90d8a19b2e000a09eb509ae8f1/Ho/pihvi-pannulla.jpg",
        text: "Herq piffi",
        id: 2
    },
    {
        title: "postaus 3",
        image: "https://is.mediadelivery.fi/img/1920/2b6e6de7f4a9444e995b8b6aef1cf90a.jpg",
        text: "Nam  Nam",
        id: 3
    },
    {
        title: "postaus 4",
        image: "https://im.mtv.fi/image/6062438/landscape16_9/1024/576/1d9cb7914a8f09c65aa5dd90906060ae/pU/shutterstock-145058521.jpg",
        text: "Lihaa!",
        id: 4
    },
    {
        title: "postaus 5",
        image: "http://www.chiliyhdistys.fi/wp-content/uploads/2018/07/Pihvi-raaka.jpg",
        text: "Tosimiehen Vege",
        id: 5
    },
]

const useStyles = makeStyles({
    carditem: {
        width: 200,
        height: 350,
        margin: 10,
        padding: 5,
    },

});


const Posts = () => {
    const classes = useStyles();
    return (
        <div style={{ marginTop: "150px" }}>
            <Grid container justify="center" alignItems="center" spacing={2}>
                {postitems.map(item => (

                    <Card className={classes.carditem} key={item.id}>

                        <CardHeader>
                            
                        </CardHeader>

                        <CardMedia
                            component="img"
                            alt={item.image}
                            height="180px"
                            image={item.image}
                        />

                        <CardContent>
                            <Typography>
                                {item.text}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button href="https://www.bc.fi" color="secondary" variant="outlined">Lue lisää</Button>
                        </CardActions>

                    </Card>

                ))}
            </Grid>
        </div>
    );
};

export default Posts;