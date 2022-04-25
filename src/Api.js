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

export const updating = async(obj)=>{
    const temp = await axios.post(`${link}/up/${obj.id}`,obj)
    return temp;
} 


export const finding=async(para2)=>{
    const temp =await axios.get(`${link}/gett/id/${para2}`)
    return temp;
}
