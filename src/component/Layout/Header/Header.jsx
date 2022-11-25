import React, {useState} from "react";
import { Link } from "react-router-dom";
import StyledButton from "../../../styles/styleButton";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';
import logo from 'assets/image/header-logo.svg';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import WalletIcon from '@mui/icons-material/Wallet';
import InsertChartIcon from '@mui/icons-material/InsertChart';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:380,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p:1,
}

const Header =()=>{
    
    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenDrawer =()=>{
        setOpenDrawer(true)

    }
    const handleCloseDrawer =()=>{
        setOpenDrawer(false)
    }

    return(
        <>
        <Grid container  sx={{height:"64px",borderBottom:{xs:'1px solid #e0e0e0',sm:'none'}, padding:{xs:'10px',sm:'20px 45px'},position:'fixed', top:'0',backgroundColor:'white'}} >
            <Grid sx={{display:{xs:'flex',sm:'none'},justifyContent:'flex-start' }}>
                <img src={logo} alt="logo" style={{width:'130px', height:'35px'}}/> 
            </Grid>
            <Grid container item sx={{display:{xs : 'none' , md : 'flex'}, justifyContent:'space-between', }}>
                <Grid container item sx={{width:'40%',display:'flex', alignItems:'baseline',gap:'20px'}}>
                    <Typography>
                        <IconButton onClick={handleOpenDrawer}>
                            <MenuIcon/>
                        </IconButton>
                            منو
                    </Typography>
                    <Link to="/" style={{textDecoration:'none'}}>
                        <Typography sx={{color:'#000'}}>
                            خانه
                        </Typography>
                    </Link>
                    <Link to="/currentPrice" style={{textDecoration:'none'}}>
                        <Typography sx={{color:'#000'}}>
                            قیمت لحظه ای
                        </Typography>
                    </Link>
                </Grid>
                <Grid container item sx={{width:'60%',display:'flex', flexDirection:'row-reverse'}}>
                    <Grid  container item sx={{width:'100%' ,justifyContent:'flex-end',alignItems:'baseline'}}>
                        <Grid container sx={{ display:'flex', width:'35%', alignContent:'baseline'}}>
                            <Grid sx={{display:'flex' , gap:'5px'}} >
                                <StyledButton onClick={handleOpen} sx={{width:'100px',height:'36px', color:'white', backgroundColor:'#3062b2', borderRadius:'3px'}} >
                                    <Typography> ورود </Typography>
                                    <Typography> / </Typography>
                                    <Typography> ثبت نام </Typography>
                                </StyledButton>
                                <Grid sx={{width:'1.5px', height:'30px', backgroundColor:'grey',marginTop:'4px'}}></Grid>
                            </Grid>
                            <Grid container item sx={{width:'50%',justifyContent:'flex-start',alignItems:'baseline'}}>
                                <img src={logo} alt="logo" style={{width:'150px', height:'45px'}}/> 
                            </Grid>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <Grid container sx={{width:'100%', height:'60px', display:'flex', justifyContent:'center'}}>
                                            <img src={logo} alt="logo" style={{width:'150px' , height:'50px'}}/>
                                        </Grid>
                                        <Grid container bgcolor='#f1f4f6'py={3} sx={{display:'flex' , flexDirection:'column', justifyContent:'center' ,textAlign:'center'}}>
                                            <Typography variant="h5" sx={{lineHeight:'35px'}}>
                                                به بیت برگ خوش آمدید.
                                            </Typography>
                                            <Typography sx={{marginBottom:'50px'}}>
                                                برای ورود یا ثبت نام، لطفا شماره موبایل خود را وارد کنید.
                                            </Typography>
                                            <TextField label="شماره تلفن" defaultValue={"۰۹xx xxx xxxx"}  variant='outlined' sx={{width:'90%', margin:'0 auto'}}/>
                                            <Button disabled sx={{width:'90%', backgroundColor:'#2e5da9', color:'#fff', margin:'0 auto',marginTop:'30px'}}>ادامه</Button>
                                        </Grid>
                                    </Box>
                                </Fade>
                            </Modal>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
        <Drawer open={openDrawer} variant="permanent" anchor="right" sx={{display:openDrawer ? 'block' : 'none','& .MuiDrawer-paper': {width:350}}} >
            <Grid container sx={{padding:'25px , 15px'}}>
                <Grid container item p={3} sx={{width:'100%', display:'flex', justifyContent:'flex-end'}}>
                    <IconButton onClick={handleCloseDrawer}>
                        <CloseIcon/>
                    </IconButton>
                </Grid>
                <Grid container item sx={{display:'flex', justifyContent:'center'}}>
                    <img src={logo} alt="logo" style={{width:'300px' , height:'130px'}}/>
                </Grid>
                <Grid container item  p={2} my={2} sx={{borderBottom:'1px solid #e0e0e0',display:'flex', flexDirection:'column', gap:'10px',}}>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <Grid container item sx={{gap:'10px',alignItems:'center'}}>
                            <HomeIcon sx={{color:'#212121',fontSize:30}}/><Typography sx={{color:'#212121'}}>خانه</Typography>
                        </Grid>
                    </Link>
                    <Grid container item sx={{gap:'10px', alignItems:'center'}}>
                        <WalletIcon sx={{color:'#212121',fontSize:30}}/><Typography sx={{color:'#212121'}}>کیف پول</Typography>
                    </Grid>
                    <Link to="/currentPrice" style={{textDecoration:"none"}}>
                        <Grid container item sx={{gap:'10px',alignItems:'center'}}>
                            <InsertChartIcon sx={{color:'#212121',fontSize:30}}/><Typography sx={{color:'#212121'}}>قیمت لحظه ای</Typography>
                        </Grid>
                    </Link>
                </Grid>
            </Grid>
        </Drawer>                   
        </>
    )
}

export default Header;