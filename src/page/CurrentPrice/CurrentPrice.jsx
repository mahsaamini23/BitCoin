import React,{useState, useEffect} from "react";
import {handleGetDataCoins} from "../../api/api";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




const CurrentPrice=()=>{
    const [coins , setCoins] = useState([])
    const [star, setStar] = useState(false)
    const [search , setSearch] = useState("")

    const handleGetData = async () => {
        const data = await handleGetDataCoins()
        setCoins(data.data) 
    }
    
    useEffect(()=>{
        handleGetData()
    },[])
    
    const handleStar = (id)=>{
        const item = coins.filter(coin => coin.id === id)
        if(item[0].id === id){
            setStar(true)
        }else{
            setStar(false)
        }
    }

    return(
        
        <Grid container bgcolor="#fafafa" sx={{marginTop:'60px'}}>
            <Grid sx={{ width:{xs:'95%',md:'80%'},height:'auto',margin:'30px auto', backgroundColor:'#fff', borderRadius:'8px',display:'flex', flexDirection:'column',padding:{xs:'10px', md:'25px'}}}>
                <Grid my={2} sx={{display:{xs:'none',md:'flex'}, alignItems:'baseline', gap:'15px',}}>
                    <Typography variant={'h5'} >قیمت لحظه ای</Typography>
                    <Typography>ارز دیجیتال</Typography>
                </Grid>
                <Grid container sx={{display:'flex',width:'100%', gap:'10px', justifyContent:{sx:'column', md:'row'},marginBottom:'40px'}}>
                    <Grid sx={{display:'flex', alignContent:'baseline',gap:'5px', border:'1px solid #bdbdbd', width:{xs:'90%',md:'30%'}, height:'40px', borderRadius:'3px'}}>
                        <SearchIcon sx={{color:'#bdbdbd', margin:'6px 3px'}}/>
                        <input type="search" onChange={(e)=>setSearch(e.target.value)} placeholder="جستجو" style={{border:'none'}} />
                    </Grid>
                    <Grid container sx={{display:'flex', alignContent:'baseline' , border:'1px solid #bdbdbd', width:{xs:'50%',md:'30%'}, height:{xs:'30px',md:'40px'},borderRadius:'3px'}}>
                        <StarBorderIcon sx={{color:'#bdbdbd', margin:{xs:'2px',md:'6px 3px'}}}/>
                        <Typography p={1}>
                            نشان شده ها
                        </Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <TableContainer sx={{border:'1px solid #e0e0e0', borderRadius:'10px',}}>
                        <Table>
                            <TableHead sx={{display:{xs:'none',md:'flex'}, width:'100%'}}>
                                <TableRow sx={{backgroundColor:"#fafafa",width:'100%', borderBottom:'1px solid #e0e0e0'}}>
                                    <TableCell align="left">نشان کردن</TableCell>
                                    <TableCell align="left">تغییرات</TableCell>
                                    <TableCell align="left">قیمت فروش</TableCell>
                                    <TableCell align="left">قیمت خرید</TableCell>
                                    <TableCell align="left">ارز دیجیتال</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {coins.filter(coin => search === "" ? coin : coin.name.toLowercase().includes(search.toLowercase()))
                                .map(coin=>(
                                    <TableRow key={coin.id} sx={{width:{xs:'280px',md:'100%'}, height:'60px', display:'flex', justifyContent:'flex-end'}}>
                                        <TableCell align="left" sx={{width:{xs:'20%',md:'20%'}}} onClick={()=>handleStar(coin.id)}>{coin.symbol === star ? <StarBorderIcon sx={{color:'#ffff00'}}/>:<StarBorderIcon/>}</TableCell>
                                        <TableCell align="left" sx={{fontSize:{xs:'8px', md:'14px'},width:{xs:'20%',md:'20%'}}}>{coin.price_change_percentage_24h}</TableCell>
                                        <TableCell align="left" sx={{display:{xs:'block', md:'none'}}}>
                                            <Grid>
                                                <Typography sx={{fontSize:{xs:'12px', md:'normal'}}}>{coin.current_price}</Typography>
                                                <Typography sx={{fontSize:{xs:'12px', md:'normal'}}}>{coin.current_price}</Typography>
                                            </Grid>
                                        </TableCell>
                                        <TableCell align="left" sx={{display:{xs:'none', md:'block'},width:'20%'}}>{coin.current_price}</TableCell>
                                        <TableCell align="left" sx={{display:{xs:'none', md:'block'},width:'20%'}}>{coin.current_price}</TableCell>
                                        <TableCell align="left" sx={{display:{xs:'none',md:'flex'}, justifyContent:'flex-end',gap:'10px',width:'20%'}}>{coin.name}<img src={coin.image} alt='logo' style={{width:'25px', height:'25px'}}/></TableCell>
                                        <TableCell align="left" sx={{display:{xs:'block', md:'none'},width:'40%'}}>
                                            <Grid>
                                                <img src={coin.image} alt='logo' style={{width:'20px', height:'20px'}}/>
                                                <Typography sx={{fontSize:'12px'}}>{coin.name}</Typography>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>    
                </Grid>
            </Grid>
        </Grid> 
        
    )
}

export default CurrentPrice;