import React, {useState} from "react";
import LoginImage from '../assets/Fruits-veggies-701x466.jpg';
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";


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
        <div style={{display:'flex', height:'100%'}}>
            <img src={LoginImage} height={562} width={'50%'}/>
            <div style={{display:'flex' , justifyContent:'center', minWidth:'50%' }}>
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center'}}>
                    <TextField
                        style={{width: '300px'}}
                        id="username"
                        label="Username"
                        value={loginValues.username}
                        onChange={handleChange('username')}
                        margin="normal"
                    />


                    <br/>
                    <TextField value={loginValues.password}
                               label="Password"
                               style={{width: '300px', marginTop: '10px'}}
                               onChange={handleChange('password')}
                               type="password"/>
                    <br/>
                    <br/>
                    <div style={{display: 'flex', marginTop: '15px'}}>
                        <Button variant="contained" color="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default LoginPage;
