import React from  "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item =({children, nameIcon})=>{
    return (
        <Grid container item sx={{display:'flex' , flexDirection:'column', justifyContent:'space-evenly',width:'25%' , alignContent:'baseline',padding:'0 10px'}} >
            {children}
            <Typography sx={{color:'grey',textAlign:'center'}}>
                {nameIcon}
            </Typography>
        </Grid>
    )
}

export default Item;