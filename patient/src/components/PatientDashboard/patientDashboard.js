import { Grid, Button, Toolbar, } from '@material-ui/core'
import React from 'react'
import Header from './navbar.js'


const PatientDashBoard = () => {
    const btnstyle={"&:hover": {background: "#FF000"}, backgroundColor:'#20CD51', left:"30%", margin:"25px", width:'250px', height:'250px', borderRadius: 50,  color:"white", fontWeight:"bold", fontSize:20}
    return (
        <div>
            <Header />
            <Toolbar />
            <Grid style={{margin:"120px 0 20px  0",}}>
            <h1 style={{textAlign:'center',marginLeft:"350px", background:"#20CD51",color:"white",width:"800px", height:"100px", borderRadius:"40px", fontStyle:"italic"}}>Welcome, {window.location.href.split("/")[3]}!</h1>
                <Button style={btnstyle}>View data Requests</Button>
                <Button style={btnstyle}>View Hospital Records</Button>
            </Grid>
        </div>
    )
}


export default PatientDashBoard