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
    constructor(props) {
        super(props);
        this.state = {
            postDetails: this.props.postDetails
        }
    }

    render() {
        const { userName, postTitle, postImageUrl, date, postContent, postImageTitle } = this.props.postDetails;
        return (
            <div className="post-container">
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">
                                {userName[0]}
                            </Avatar>
                        }
                        title={postTitle}
                        subheader={date}
                    />
                    <CardMedia
                        image={postImageUrl}
                        title={postImageTitle}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {postContent}
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