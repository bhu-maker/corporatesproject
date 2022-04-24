import axios from 'axios'
const link="http://127.0.0.1:8000/rest/api"

export const listing=async()=>{
    const temp = await axios.get(`${link}/gett`)
    return temp;
}

export const filling=async(hai)=>
{
    const temp = await axios.post(`${link}/postt`,hai)
    return temp;
}

export const reading=async(para)=>{
    const temp= await axios.get(`${link}/gett/${para}`)
    return temp;

}