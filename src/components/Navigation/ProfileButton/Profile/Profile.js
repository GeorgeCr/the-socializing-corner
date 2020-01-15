import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import FacebookIcon from '@material-ui/icons/Facebook';
import SchoolIcon from '@material-ui/icons/School';
import Grid from "@material-ui/core/Grid";
import './Profile.css';

export default class Profile extends Component {

    profileRedirectAction = location => {
        if (location === 'facebook') {
            window.location.href = 'https://www.facebook.com/Hacker-Guy-1431975007027236/';
        }
        else if (location === 'faculty') {
            window.location.href = 'http://www.feaa.uaic.ro/';
        }
    }

    render() {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFIz_Y1PZ4SZRN1FvFu90xkvZQ2fnc98YUyiXmSm1rw74n9z7Kw&s"
                        title="User photo"
                    />
                </CardActionArea>
                <CardContent>
                    <Typography align={"center"} gutterBottom variant="h5" component="h2">
                        Collin Hackerman
                    </Typography>
                    <Typography align={"center"} variant="body2" color="textSecondary" component="p">
                        Bio: Bro, I am the best Economic Informatics student here. My programming skills are the best out here. 😎😎
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid
                        container
                        justify='space-between'
                    >
                        <Grid
                            item
                            className="action-item"
                        >
                            <Button size="small"
                                color="primary"
                                variant="contained"
                                color="default"
                                startIcon={<FacebookIcon />}
                                onClick={() => this.profileRedirectAction('facebook')}
                            >
                                Facebook
                            </Button>
                        </Grid>
                        <Grid
                            item
                            className="action-item"
                        >
                            <Button size="small" color="primary"
                                    variant="contained"
                                    color="default"
                                    startIcon={<SchoolIcon />}
                                    onClick={() => this.profileRedirectAction('faculty')}
                            >
                                Faculty
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        );
    }
}