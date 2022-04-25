import { useState } from "react"
import '..//node_modules/bootstrap/dist/css/bootstrap.min.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SwipeRightAltIcon from '@mui/icons-material/SwipeRightAlt';
import SwipeLeftAltIcon from '@mui/icons-material/SwipeLeftAlt';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { filling } from "./Api";


export const Corporateform=()=>
{
    const[corp,corpfn]=useState({
        "org":"",
        "nature":"Select Any Nature",
        "place":"",
        "opennings":"",
        "salary":0.0,
        "ratings":0.0,
        "employees":0
    })

   
    const submitting=async()=>{
        const t = await filling(corp)
        alert(JSON.stringify(t.data))
        resetting()
    }
    const resetting=()=>{
        corpfn(()=>{
            return{
                "org":"",
                "nature":"Select Any Nature",
                "place":"",
                "opennings":"",
                "salary":0.0,
                "ratings":0.0,
                "employees":0
            }
        })

    }

     const handlechange=(obj)=>{
         const{name,value}=obj.target
         corpfn((oldobj)=>{
             return{
                 ...oldobj,
                 [name]:value
             }
         })
     }
    return(
        <>
        <div className='container-fluid'>
            <h1 className="text-center display-6 text-primary">Corporate MOE</h1>
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9 col-sm-12 shadow rounded p-4 mb-4">        
                    <TextField
                        required
                        id="outlined-required"
                        label="Organization Name"
                        defaultValue=""
                        name="org"
                        className="mb-3 form-control"
                        value={corp.org}
                        onChange={handlechange}                     
                    />
                    <InputLabel id="demo-simple-select-helper-label">Organization Nature</InputLabel>
                            <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                           
                            label="Nature"
                            name="nature"
                          
                            className="mb-3 form-select"
                            onChange={handlechange}
                            value={corp.nature}
                           
                            >
                            <MenuItem value="Select Any Nature">
                                <em>Select Any Nature</em>
                            </MenuItem>
                            <MenuItem value="Product">Product</MenuItem>
                            <MenuItem value="service">Service</MenuItem>
                            <MenuItem value="ITES"> ITES</MenuItem>
                            </Select>
                    <TextField
                            required
                            id="outlined-required"
                            label="Organization Opennings"
                            defaultValue=""
                            name="opennings"
                            className="mb-3 form-control"
                            onChange={handlechange}
                            value={corp.opennings}
                    />  
                     <TextField
                            required
                            id="outlined-required"
                            label="Organization Place"
                            defaultValue=""
                            name="place"
                            className="mb-3 form-control"
                            onChange={handlechange}
                            value={corp.place}
                            
                    />      
                    <TextField
                            required
                            id="outlined-required"
                            label="Organization Employees Count"
                            defaultValue=""
                            name="employees"
                            className="mb-3 form-control"
                            onChange={calling}
                            value={corp.employees}
                    />   
                    <InputLabel htmlFor="outlined-adornment-amount">Basic Salary</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                          
                            onChange={handlechange}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="salary"
                            name="salary"
                            className="mb-3 form-control"
                            value={corp.salary}
                        />   
                        <InputLabel htmlFor="outlined-adornment-amount">Ratings</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                          
                            onChange={handlechange}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Ratings"
                            name="ratings"
                            className="mb-3 form-control"
                            value={corp.ratings}
                        />  
                        <div className='row justify-content-around mb-3 mt-3'>
                        <Button variant="outlined" color="info" className="col-3" onClick={submitting}><SwipeRightAltIcon/></Button>
                        <Button variant="outlined" color="error" className="col-3" onClick={resetting}><SwipeLeftAltIcon/></Button>

                            
                        </div> 
                    
                    
                   
                </div>
            </div>
        </div>
     


        </>
    )
}