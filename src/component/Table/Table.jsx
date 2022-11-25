import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import Typography from '@mui/material/Typography';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Card from '../Card/Card';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const MainTable=({coins})=>{

    const [state , setState] = useState(true)

   
    const handleMaximum =()=>{
        setState(true)
    }

    const handleMinimum =()=>{
        setState(false)
    }

    const maxValue = coins.filter(coin=>coin.price_change_percentage_24h>0);
    const minValue = coins.filter(coin=>coin.price_change_percentage_24h<0);

    
    return(
    <Grid sx={{width:'100%', backgroundColor:'#fafafa',padding:{md:'60px 0'}}}>
        <Grid container  bgcolor='#fff' sx={{width:{md:'80%'},padding:{md:'30px 50px'}, margin:"0 auto",borderRadius:'10px', display:'flex', flexDirection:'column'}}>
            <Grid   sx={{display:'flex', flexDirection:'row', gap:'5px',padding:{xs:'0 10px'}}}>
                <Grid >
                    <InsertChartOutlinedIcon color="success" sx={{fontSize:40}}/>
                </Grid>
                <Grid sx={{width:'100%',display:'flex', justifyContent:'space-between'}}>
                    <Grid>
                        <Typography>قیمت لحظه ای</Typography>
                        <Typography>در ۲۴ ساعت گذشته</Typography>
                    </Grid>
                    <Grid>
                        <Link to="/currentPrice" style={{textDecoration:'none', color:"blue"}}>
                            <Typography>نمایش همه</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid sx={{margin:'30px 0'}}>
                <Grid sx={{width:{xs:'90%',md:'35%'},height:'43px', borderRadius:'5px', backgroundColor:'#fafafa', display:'flex', flexDirection:'row'}}>
                    <Grid container sx={{width:'48%',height:'36px', borderRadius:'3px', backgroundColor:'#FFF',margin:'3px auto',justifyContent:'center', alignContent:'baseline',paddingTop:'6px'}}>
                        <TrendingUpIcon color="success"/>
                        <Typography onClick={handleMaximum} sx={{textAlign:'center',cursor:'pointer'}}>
                            بیشترین رشد
                        </Typography>
                    </Grid>
                    <Grid container sx={{width:'48%',height:'36px', borderRadius:'3px', backgroundColor:'#FFF',margin:'3px auto',justifyContent:'center', alignContent:'baseline',paddingTop:'6px'}}>
                        <TrendingDownIcon color="warning" />
                        <Typography onClick={handleMinimum} sx={{textAlign:'center',cursor:'pointer'}}>
                            کمترین رشد
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
           
            <TableContainer sx={{display:{ xs:'none' , md:'block'},border:'1px solid #e0e0e0', borderRadius:'8px 8px 0 0'}} >
                <Table>
                    <TableHead>
                        <TableRow sx={{backgroundColor:"#fafafa"}}>
                            <TableCell align="right">ارز دیجیتال</TableCell>
                            <TableCell align="right">قیمت خرید</TableCell>
                            <TableCell align="right">قیمت فروش</TableCell>
                            <TableCell align="right"sx={{paddingRight:'40px'}}>تغییرات</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state === true ?
                            maxValue.sort((a,b)=>b.price_change_percentage_24h - a.price_change_percentage_24h).map((coin, index)=>(
                                <TableRow key={index}>
                                    <TableCell align="right" sx={{display:'flex', justifyContent:'flex-end',gap:'10px'}}>{coin.name}<img src={coin.image} alt='logo' style={{width:'25px', height:'25px'}}/></TableCell>
                                    <TableCell align="right">{coin.current_price}</TableCell>
                                    <TableCell align="right">{coin.current_price}</TableCell>
                                    <TableCell align="right" sx={{color:'green',display:'flex',justifyContent:'flex-end', alignItems:'center'}}>{coin.price_change_percentage_24h}% <ArrowDropUpIcon sx={{color:'green',fontSize:30}} /></TableCell>
                                </TableRow>
                            ))
                        :
                            minValue.map((coin, index)=>(
                                <TableRow key={index}>
                                    <TableCell align="right" sx={{display:'flex', justifyContent:'flex-end',gap:'10px'}}>{coin.name}<img src={coin.image} alt='logo' style={{width:'25px', height:'25px'}}/></TableCell>
                                    <TableCell align="right">{coin.current_price}</TableCell>
                                    <TableCell align="right">{coin.current_price}</TableCell>
                                    <TableCell align="right" sx={{color:'red',display:'flex',justifyContent:'flex-end', alignItems:'center'}}>{coin.price_change_percentage_24h}$ <ArrowDropDownIcon sx={{color:'red',fontSize:30}}/></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid sx={{ width:'300px',display:{xs:'flex', md:'none'}, overflow:'scroll',gap:'20px'}}>
                {state === true ?
                    maxValue.map((coin, index)=>(
                        <Card id={coin.id} name={coin.name} image={coin.image} price={coin.current_price} change={coin.price_change_percentage_24h} color='green' Icon={<ArrowDropUpIcon/>}/>
                    ))
                :
                    minValue.map((coin,index)=>(
                        <Card id={coin.id} name={coin.name} image={coin.image} price={coin.current_price} change={coin.price_change_percentage_24h} color="red" Icon={<ArrowDropDownIcon/>}/>
                    ))
                }
            </Grid>
        </Grid>
    </Grid>
)}

export default MainTable;