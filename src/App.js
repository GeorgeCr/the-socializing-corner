import React, { Component } from 'react';
import fire from './fire';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Grid from "@material-ui/core/Grid";
import PostsSection from "./components/PostsSection/PostsSection";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Navigation/ProfileButton/Profile/Profile";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromDbPosts: [],
            fromSearchTermsPosts: []
        };
    }

    componentDidMount() {
        // Create reference to messages in Firebase Database
        let postsRef = fire.database().ref('posts').orderByKey().limitToLast(100);

        // Get the posts from the database

        postsRef.on('value', snapshot => {
            // this.setState( { posts: snapshot.val() });
            const posts = Object.values(snapshot.val())
            this.setState( { fromDbPosts: posts, fromSearchTermsPosts: posts} );
        })
        // Subscribe to added child event and create front-end logic for that
        // postsRef.on('child_added', snapshot => {
        //     // Update React state when message is added at Firebase Database
        //     let post = { text: snapshot.val(), id: snapshot.key };
        //     this.setState({ posts: [post].concat(this.state.posts) });
        // });

        // Subscribe to removed child event and create front-end logic for that
        // postsRef.on('child_removed', snapshot => {
        //     const { posts } = this.state;
        //     const newPosts = posts.filter(post => post.id !== snapshot.key);
        //     this.setState({ posts: newPosts });
        // })
    }

    // addMessage = (event) => {
    //     event.preventDefault();
    //     console.log(fire, fire.database(), fire.database().ref('messages'));
    //     // Send the message to Firebase
    //     fire.database().ref('messages').push( this.inputEl.value );
    //     this.inputEl.value = '';
    // }

    // deleteMessage = (event, messageId) => {
    //     event.preventDefault();
    //     // Get Message ref
    //     const messageRef = fire.database().ref('messages/' + messageId);
    //     // Delete the message from Firebase
    //     messageRef.remove()
    //         .then(() => {
    //             // Delete the message from app state
    //             console.log('Successfully deleted.')
    //         })
    //         .catch(() => console.log('There was a problem deleting this item.'))
    // }

    // renderMessage = (message) => {
    //     const currentMessage = message;
    //     return (
    //         <div
    //             className="message-container"
    //             key={`m-${currentMessage.id}`}
    //         >
    //             <li>{currentMessage.text}</li>
    //             <button
    //                 onClick={(event, message) => this.deleteMessage(event, currentMessage.id)}
    //             >
    //                 Delete
    //             </button>
    //         </div>
    //     )
    // }

    getPostsBySearchTerm (searchTerm) {
        const fromDbStatePosts = this.state.fromDbPosts.slice(0);
        if (searchTerm === "") {
            this.setState( { fromSearchTermsPosts: fromDbStatePosts });
            return;
        }
        const fromSearchTermsPosts = fromDbStatePosts.filter(post => post.postContent.toLowerCase().indexOf(searchTerm) !== -1
            || post.postTitle.toLowerCase().indexOf(searchTerm) !== -1
            || post.postImageTitle.toLowerCase().indexOf(searchTerm) !== -1
            || post.userName.toLowerCase().indexOf(searchTerm) !== -1);
        this.setState( { fromSearchTermsPosts } );
    }

    render() {
        return (
            <BrowserRouter>
                <div className="main-container">
                    <Grid container justify="center">
                        <Grid item xs={10}>
                            <Navigation passSearchTerm={(searchTerm) => this.getPostsBySearchTerm(searchTerm)} />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid
                            item
                            md={4}
                            xs={10}>
                                <Route exact path="/">
                                    <PostsSection posts={this.state.fromSearchTermsPosts} />
                                </Route>
                                <Route exact path="/profile">
                                    <Profile />
                                </Route>
                        </Grid>
                    </Grid>
                </div>
            </BrowserRouter>
        );
    }
}