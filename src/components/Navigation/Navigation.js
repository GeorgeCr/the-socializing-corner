import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Search from "./Search/Search";
import './Navigation.css';
import ProfileButton from "./ProfileButton/ProfileButton";
import NewPost from "./NewPost/NewPost";
import { Link } from "react-router-dom";

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
                        <span className="profile-button">
                            <ProfileButton />
                        </span>
                        <span className="new-post-button">
                            <NewPost />
                        </span>
                    </Grid>
                    <Grid
                        className="nav-item"
                        item
                    >
                        <span className="brand-title">
                            <Link to="/">
                                 Socializing Corner
                            </Link>
                        </span>
                    </Grid>
                    <Grid
                        className="nav-item"
                        item
                        xs={12}
                        md={4}
                    >
                        <Search passSearchTerm={(searchTerm) => this.props.passSearchTerm(searchTerm) } />
                    </Grid>
                </Grid>
            </div>
        )
    }
}