import axios from 'axios';
const API_URL="http://localhost:8000";
export const uploadFile=async (data) => {
    try{

     let response= await  axios.post(`${API_URL}/upload`,API_URL,data);
     return response.data;
    }catch(error){
        console.error('error while calling api',error.message);}
}
{
    
}