import React, { Component } from 'react';
import { Card } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import './Post.css';

export default class Post extends Component {
    render() {
        return (
            <div className="post-container">
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">
                                G
                            </Avatar>
                        }
                        title="The new Tesla Model 3"
                        subheader="December 23, 2019"
                    />
                    <CardMedia
                        image="https://www.tesla.com/sites/tesla/files/curatedmedia/model-s%402x.jpg"
                        title="Cat photo"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Tesla Model 3 is the best! hell yeah Elon Musk 😎😍
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="like">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        )
    }
}