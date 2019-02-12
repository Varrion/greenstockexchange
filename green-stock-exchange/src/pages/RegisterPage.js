import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import styled from 'styled-components'
import {createUser, fetchAllUsers} from "../services/UserApi";
import {navigate} from "@reach/router";

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledForm = styled.form`

display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

function RegisterForm() {

    const [users, setUsers] = useState(null);
    const [loginValues, setLoginValues] = useState({
        name: '',
        password: '',
        mobile: '',
        location: '',
        address: '',
        description: '',
    });

    const validateForm = () => {

        return loginValues.email.length > 0 && loginValues.password.length > 0;

    };

    const handleChange = name => event => {
        setLoginValues({...loginValues, [name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        createUser(loginValues).then(res=> console.log("Uspesno ", res))
        navigate('/');
    };

    useEffect(() => {
        fetchAllUsers().then(res => {
            setUsers(res)
        })
    }, []);


    console.log("Users", users);
    console.log(loginValues);

    return (
        <Container>
            <StyledForm onSubmit={handleSubmit}>
                <TextField
                    id="filled-name"
                    fullWidth
                    label="Name"
                    margin="normal"
                    value={loginValues.name}
                    onChange={handleChange('name')}
                />

                <br/>
                <TextField value={loginValues.password}
                           fullWidth
                           label="Password"
                           onChange={handleChange('password')}
                           type="password"/>
                <br/>

                <TextField
                    id="filled-name"
                    fullWidth
                    label="Mobile"
                    margin="normal"
                    value={loginValues.mobile}
                    onChange={handleChange('mobile')}
                />

                <TextField
                    id="filled-name"
                    label="Address"
                    fullWidth
                    margin="normal"
                    value={loginValues.address}
                    onChange={handleChange('address')}
                />

                <TextField
                    id="filled-name"
                    label="Location"
                    fullWidth
                    margin="normal"
                    value={loginValues.location}
                    onChange={handleChange('location')}
                />

                <TextField
                    id="filled-name"
                    label="Description"
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    multiline={true}
                    rows={4}
                    value={loginValues.description}
                    onChange={handleChange('description')}
                />


                <Button variant="contained" type="submit">
                    Register
                </Button>
            </StyledForm>
        </Container>
    )
}

export default RegisterForm;