import { Toolbar, TextField, Button, } from "@material-ui/core";
import React from "react";
import Header from './Navbar.js'
import Consent from "./Consent.js";

const ConsentDashBoard = () =>{
    return (
        <div>
            <Header />
            <Toolbar />
            <Consent />
        </div>
    )
}

export default ConsentDashBoard
