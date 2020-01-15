import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { PostAdd } from "@material-ui/icons";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import NewPostForm from "./NewPostForm/NewPostForm";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

export default class NewPost extends Component {
    render() {
        return (
            <Button
                variant="contained"
                color="default"
                startIcon={<PostAdd />}t
                onClick={handleClickOpen}

            >
                New Post
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"New Post"}</DialogTitle>
                <form noValidate autoComplete="off">
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                           <NewPostForm />
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" onClick={handleClose} color="primary">
                            Post
                        </Button>
                </DialogActions>
                </form>
            </Dialog>
        </div>
    );
  }
}