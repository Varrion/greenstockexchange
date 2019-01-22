import React, {Component, useState} from "react";
import LoginImage from '../assets/Fruits-veggies-701x466.jpg';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {makeStyles} from '@material-ui/styles';


function LoginPage(props) {

    const [loginValues, setLoginValues] = useState({
        username: '',
        password: '',
    });

    const validateForm = () => {

        return loginValues.email.length > 0 && loginValues.password.length > 0;

    };

    const handleChange = name => event => {
        setLoginValues({...loginValues, [name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(loginValues);
    }

    return (
        <div style={{display: 'flex', alignItems: "stretch"}}>
            <div style={{
                position: 'absolute',
                width: '100%',
                display: 'flex',
                alignItems: 'stretch',
                flexDirection: 'row'
            }}>
                <div style={{minWidth: '50%', display:'flex'}}>
                    <img src={LoginImage}/>
                </div>
                <div style={{minWidth: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                        <TextField
                            style={{width: '250px'}}
                            id="username"
                            label="Username"
                            value={loginValues.username}
                            onChange={handleChange('username')}
                            margin="normal"
                        />


                        <br/>
                        <TextField value={loginValues.password}
                                   label="Password"
                                   style={{width: '250px', marginTop: '10px'}}
                                   onChange={handleChange('password')}
                                   type="password"/>
                        <br/>
                        <br/>
                        <div style={{display: 'flex', alignSelf: 'center', marginTop: '15px'}}>
                            <Button variant="contained" color="primary" type="submit">
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
