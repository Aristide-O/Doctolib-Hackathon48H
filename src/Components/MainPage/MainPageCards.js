import React from 'react'


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Conseil from './Conseil.jpg'
import courbe from './courbeDeCroissance.png'
import hospitalisation from './hospitalisation.jpg'
import Perinatal from './femmeEnceinte.jpg'
import surveillance from './surveillanceMedical.jpg'
import Typography from '@material-ui/core/Typography';
import vaccination from './vaccination.jpg'

import { makeStyles } from '@material-ui/core/styles';

import './MainPageCards.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const MainPageCards = () => {
    const classes = useStyles();

    return (
        <div className='containerMain'>
            <div className='perinatal'>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={Perinatal}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Period perinital
                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            We know that being a woman can be difficult, a pregnancy is even more difficult.
                            This is why following these perinatal periods is essential.
                </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div className='surveillance'>
                <a href='/MedicalSurveillance'>
                    <Card className={classes.root}>
                        <CardActionArea>

                            <CardMedia
                                className={classes.media}
                                image={surveillance}
                                title="Contemplative Reptile"
                            />
                            
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Medical supervison
                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Our doctors supervise our patients with care, 
                                the health of our children are our priorities.
                                Clear and precise monitoring is at your disposal.
                                
                    </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                    </a>
            </div>
            <div className='growth'>
            <a href='/GrowthPage'>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={courbe}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Growth curve
                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                
                            The growth curve is displayed
                            for each child according 
                            to their age and weight
                            Do not hesitate to consult our curves
                    </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </a>
            </div>
            <div className='hospitalisation'>
            <a href='/hospitalisation'>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={hospitalisation}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Hospitalisation
                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            We take care of your children safely, trust is our key word.
                            Do not hesitate to talk to our doctors.
                            May the force be with you
                    </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </a>
            </div>
            <div className='vaccination'>
                <a href="/VaccinationPage">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={vaccination}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Vaccination
                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Your baby or child may cry for a little while after a vaccination, 
                            but they should feel better after a cuddle.
                    </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
                </a>
            </div>
            <div className='conseil'>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={Conseil}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Advice
                    </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Using our Ask A Doctor service, 
                            you can send your questions to a Doctor and the Doctor will reply within minutes.
                    </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
            </div>
        </div>
    );
}

export default MainPageCards