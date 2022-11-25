import React from "react";
import Item from "../../Item/Item";
import Grid from "@mui/material/Grid";
import HomeIcon from '@mui/icons-material/Home';
import WalletIcon from '@mui/icons-material/Wallet';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


const Footer =()=>{
    return(
        <Grid container bgcolor={'#fff'} sx={{display:{xs:'flex' , md: 'none'} , justifyContent:'space-between',alignItems:'center',width:"100%", position:'fixed', bottom:'0', borderTop:'1px solid grey', padding:'10px 0'}}>
            <Item nameIcon={"خانه"}>
                <HomeIcon sx={{color:'grey' , fontSize:30}}/>
            </Item>
            <Item nameIcon={"کیف پول "}>
                <WalletIcon sx={{color:'grey' , fontSize:30}}/>
            </Item>
            <Item nameIcon={"سفارشات"}>
                <ListAltIcon sx={{color:'grey' , fontSize:30}}/>
            </Item>
            <Item nameIcon={"پروفایل"}>
                <PermIdentityIcon sx={{color:'grey' , fontSize:30}}/>
            </Item>
        </Grid>
    )
}

export default Footer;