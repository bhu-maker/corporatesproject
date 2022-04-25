import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from 'react';
import { listing } from './Api';

export const Home=()=>{

    const[use,usestatefn]=useState([])
    const receivefn=async()=>
    {
        const temp=await listing()
        usestatefn(temp.data)

    }
    useEffect(()=>{receivefn()},[])


    return(
        <>
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='table-responsive-md'>
                    <div className="col-lg-12 col-md-9 col-sm-12 shadow p-5 ">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="center">Corporate Name</TableCell>
                                <TableCell align="center">Corporate Nature</TableCell>
                                <TableCell align="center">Corporate Opennings</TableCell>
                                <TableCell align="center">Corporate Employees</TableCell>
                                <TableCell align="center">Corporate Basic Salary</TableCell>
                                <TableCell align="center">Corporate Location</TableCell>
                                <TableCell align="center">Corporate Rating</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {use.map((row) => (
                                <TableRow>
                                <TableCell align='center'><a href={`/gett/${row.org}`} className="text-decoration-none link-success">{row.org}</a></TableCell>
                                <TableCell align="center">{row.nature}</TableCell>
                                <TableCell align="center">{row.opennings}</TableCell>
                                <TableCell align="center">{row.employees}</TableCell>
                                <TableCell align="center">{row.salary}</TableCell>
                                <TableCell align="center">{row.place}</TableCell>
                                <TableCell align="center">{row.ratings}</TableCell>
                                
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>       
                    </div>
                </div>
            </div>   
        </div>
        </>
    )
}