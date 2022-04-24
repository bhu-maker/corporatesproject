
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import  { reading } from './Api';




export const Read=()=>{
    const {para}=useParams()
    const[cat,corpfn]=useState({})
    const heycall = async()=>{
        const t = await reading(para)
        corpfn(t.data)
    }    


    useEffect(()=>{heycall()})  

    
    return(
        <>
        <div className="container"> 
        <div className="row justify-content-center">
        <card className="bg-warning col-lg-4 col-md-8 col-sm-12 shadow rounded-3">
        <CardContent>
            <Typography className="text-center text-primary"sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                {cat.org}
            </Typography>
            <Typography variant="h5" component="div">
               {cat.nature}    {cat.employees}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {cat.opennings}
            </Typography>
            <Typography variant="body2">
                {cat.place}  {cat.ratings}
                <br />
                {cat.salary}
            </Typography>
           </CardContent>
            <CardActions>
            <Button size="small">EDIT</Button>
            <span className="col-4"></span>
            <Button size="small">DELETE</Button>
            </CardActions>
            </card>      
                </div>
                </div>
                </>
            )
        }