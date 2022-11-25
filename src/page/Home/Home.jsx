import React, {useState, useEffect} from "react";
import MainTable from "../../component/Table/Table";
import DialogSearch from "../../component/DialogSearch/DialogSearch";
import {handleGetDataCoins} from "../../api/api";
import Grid from "@mui/material/Grid";
import Photo from "assets/image/PhotoBitBarg.png";
import StyledButton from "styles/styleButton";
import Typography from "@mui/material/Typography";
import StyledTextField from "../../styles/styleTextField";
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


const Home =()=>{
    const [open, setOpen] = useState(false)
    const [coins , setCoins] = useState([])
    const [selectFees, setSelectFees] = useState([])
    const [textField , setTextField] = useState({Toman:'', unit:'' , name:''})

    const handleClickOpen=()=>{
        setOpen(true)
    }

    const handleGetData = async () => {
        const data = await handleGetDataCoins()
        setCoins(data.data) 
    }
    
    useEffect(()=>{
        handleGetData()
    },[])

    console.log(coins)
    return(
        <>
            <DialogSearch open={open} setOpen={setOpen} coins={coins} selectFees={selectFees} setSelectFees={setSelectFees} setTextField={setTextField} textField={textField}/>
            <Grid sx={{display:{ xs:'none' , md:'block'}, marginBottom:'200px', marginTop:'80px'}}>
                <Grid container sx={{justifyContent:'center', marginTop:'20px'}}>
                    <img src={Photo} alt="" style={{width:'250px',height:'88px'}}></img>
                </Grid>
                <Grid container sx={{justifyContent:'center' , gap:'2px',marginTop:'8px',marginBottom:'18px'}} >
                    <StyledTextField label="تومان" type="number" name="Toman" value={textField.Toman} onClick={handleClickOpen}/>
                    <StyledTextField label="واحد" type="number" name="unit" value='1' onClick={handleClickOpen}/>
                    <StyledTextField label="انتخاب ارز"  type="text" name="name"  value={textField.name} onClick={handleClickOpen}/>
                </Grid>
                <Grid container sx={{justifyContent:'center',gap:'5px'}}>
                    <StyledButton sx={{width:'140px', height:'35px'}}>
                        <Typography>درخواست خرید</Typography>
                    </StyledButton>
                    <StyledButton sx={{width:'140px', height:'35px'}}>
                        <Typography>فروش</Typography>
                    </StyledButton>
                </Grid>
                <Grid container sx={{flexDirection:'column', alignItems:'center', marginTop:'15px'}}>
                    <Typography>پشتیبانی ۲۴ ساعته</Typography>
                    <Typography>حتی در روزهای تعطیل</Typography>
                    <Grid container item sx={{justifyContent:'center', }}>
                        <Typography color="primary">
                            ۰۲۱-۹۱۰۷۹۶۷۷
                        </Typography>
                        <PhoneIcon color="primary"/>
                    </Grid>
                    <KeyboardDoubleArrowDownIcon color='primary' sx={{fontSize:50, transition:{easing:{easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'}}}}/>
                </Grid>
            </Grid>
            <MainTable coins={coins}/>
        </>
    )
}

export default Home;