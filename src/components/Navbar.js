import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Navabar = () => {
    return (
        <AppBar color="secondary" position="static">
            <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
                <Typography>WATCH LIVE SCORE (By: Harsh Raj)
                </Typography>
            </Toolbar>
        </AppBar>
    )
}





export default Navabar;