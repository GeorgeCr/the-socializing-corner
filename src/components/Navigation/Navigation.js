import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Search from "./Search/Search";
import './Navigation.css';
import ProfileButton from "./ProfileButton/ProfileButton";

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav-grid__container">
                <Grid
                    justify='space-between'
                    container
                    spacing={1}>
                    <Grid
                        className="nav-item"
                        item
                    >
                        <span>
                            <ProfileButton />
                        </span>
                    </Grid>
                    <Grid
                        className="nav-item"
                        item
                    >
                        <span className="brand-title">
                            Socializing Corner
                        </span>
                    </Grid>
                    <Grid
                        className="nav-item"
                        item
                        xs={12}
                        md={4}
                    >
                        <Search />
                    </Grid>
                </Grid>
            </div>
        )
    }
}