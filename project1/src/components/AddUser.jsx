import { useState } from 'react'
import { FormGroup,FormControl, InputLabel,Input, Typography,styled,Button} from "@mui/material";
import { addUser } from '../services/api';
const Container = styled(FormGroup)`
    width: 30%;
    margin: 5% auto 0 auto;
    & > div { margin-top: 20px; }
`
const defaultValues = {
    name: '',
    username: '',
    email: '',
    phone:''
}


const AddUser = () => {

    const [user, setUSer] = useState(defaultValues);

    const onValueChange = (e) => {
        //console.log(e.target.name, e.target.value);
        setUSer({ ...user,[e.target.name]:e.target.value})
        //console.log(user)
    }
    const addUserDetails = async () => {
        await addUser(user)
    }
    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={ (e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={ (e) => onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={ (e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={ (e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={ () => addUserDetails() } >Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;