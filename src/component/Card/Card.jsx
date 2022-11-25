import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const Card =({id, name , image , price, change , color,Icon})=>{
    return(
        <Grid key={id} p={2} sx={{width:'300px', height:'180px', border:'1px solid #a6a6a6', borderRadius:'10px', display:'flex' ,flexDirection:'column',gap:'10px',justifyContent:'space-between' }}>
            <Grid container item my={1} sx={{width:'230px',display:'flex' , justifyContent:'space-between', alignItems:'baseline'}}>
                <Grid item sx={{display:'flex',gap:'10px'}}>
                    <img src={image} alt="logo" style={{width:'25px', height:"25px"}}/>
                    <Typography sx={{width:'70px'}}>{name}</Typography>
                </Grid>
                <Grid bgcolor="#f5fbf7" p={.5} sx={{ width:'95px', height:'30px',color:`${color}`, border:'1px solid #d9efdf',borderRadius:'20px', display:'flex', justifyContent:'center',alignContent:'baseline'}}>
                    {Icon}
                    <Typography sx={{color:`${color}`, fontSize:'12px'}}>
                        {change}%
                    </Typography>
                </Grid>
            </Grid>
            <Grid>
                <Grid sx={{borderBottom:'1px solid #a6a6a6'}}>
                    <Grid container item sx={{display:'flex', justifyContent:'space-between', marginBottom:'6px'}}>
                        <Typography>خرید</Typography>
                        <Typography>{price} دلار</Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid container item sx={{display:'flex', justifyContent:'space-between', marginTop:'6px'}}>
                        <Typography>فروش</Typography>
                        <Typography>{price} دلار</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Card;