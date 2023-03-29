import { Toolbar, Grid } from "@material-ui/core";
import React from "react";
import Header from './Navbar.js'
import Consent from "./Consent.js";

const ConsentDashBoard = () =>{
    let cards = []
    for(let i=0;i<20;i++){
        cards.push(i);
    }
    let status = "green"
    return (
        <div>
            <Header />
            <Toolbar />
            <Grid style={{marginTop:"2%"}} container direction="row" justifyContent="center" alignItems="center">
                {cards.map((id)=><Consent key={id}   consentNum={id} status={status} />)}
            </Grid>

        </div>
    )
}

export default ConsentDashBoard
