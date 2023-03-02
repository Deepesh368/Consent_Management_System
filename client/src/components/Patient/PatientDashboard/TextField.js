import { Typography } from "@mui/material";
import React from "react";

function TextField(props){
    return (
        <Typography align="left" color={'#DC7633'}>
            {props.name}
        </Typography>
    )
}

export default TextField;