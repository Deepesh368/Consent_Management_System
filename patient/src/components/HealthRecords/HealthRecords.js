import { Toolbar, Grid } from "@material-ui/core";
import React from "react";
import Header from './navBar.js'
import HealthRecord from "./HealthRecord.js";

const HealthRecords = () =>{

    return (
        <div>
            <Header />
            <Toolbar />
            <Grid style={{marginTop:"2%"}} container direction="row" justifyContent="center" alignItems="center">
                <HealthRecord recordNum=    "1" date="September 12 2006"/>
            </Grid>
        </div>
    )
}

export default HealthRecords
