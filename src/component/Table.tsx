import React,{useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import {handleGetDataCoin} from "api/axios";

const TableDigitalCurrency =()=>{
   
    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow sx={{backgroundColor:"#fafafa"}}>
                        <TableCell align="right">ارز دیجیتال</TableCell>
                        <TableCell align="right">قیمت خرید</TableCell>
                        <TableCell align="right">قیمت فروش</TableCell>
                        <TableCell align="right">تغییرات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="right">کلایتن</TableCell>
                        <TableCell align="right">۸۲۴۶</TableCell>
                        <TableCell align="right">۸۱۲۳</TableCell>
                        <TableCell align="right">۱۶.۷۲۳٪</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableDigitalCurrency;