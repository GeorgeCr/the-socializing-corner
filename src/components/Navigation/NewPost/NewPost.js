import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { PostAdd } from "@material-ui/icons";

export default class NewPost extends Component {
    render() {
        return (
            <Button
                variant="contained"
                color="default"
                startIcon={<PostAdd />}
            >
                New Post
            </Button>
        )
    }
}