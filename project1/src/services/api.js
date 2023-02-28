import axios from 'axios';
const URL='http://localhost:8000';

export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`,data);
    }catch(err){
        console.error('Error while adding user API',err);
    }
}
