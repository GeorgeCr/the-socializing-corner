import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import { Face } from "@material-ui/icons";
import './ProfileButton.css';

export default class ProfileButton extends Component {
    render() {
        return (
            <Button
                variant="contained"
                color="default"
                startIcon={<Face />}
            >
                My Corner
            </Button>
        )
    }
}