import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import {fetchAllUsers} from "../services/UserApi";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Input from "@material-ui/core/Input/Input";
import Upload from 'material-ui-upload/Upload';
import FlatButton from 'material-ui/FlatButton';

function CreateProductPage(props) {

    const [users, setUsers] = useState(null);
    const [formValues, setFormValues] = useState({
        name: '',
        description: '',
        origin: '',
        location: '',
        image: '',
        user: '',
        quality: '',
    });


    useEffect(() => {
        fetchAllUsers().then(res => {
            setUsers(res)
        })
    }, []);

    const handleChange = name => event => {
        setFormValues({...formValues, [name]: event.target.value});
    };

    // const handleSubmit = event =>  {
    //     event.preventDefault();
    //
    // };
    //
    // const onFileLoad = (e, file) => console.log(e.target.result, file.name);

    console.log(users);

    return (
        <div>
            <h2 style={{paddingLeft: 105}}>Create Product</h2>
            <form style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <TextField fullWidth style={{width: '250px'}}
                           id="product_name"
                           label="Name"
                           value={formValues.name}
                           onChange={handleChange('name')}
                           margin="normal"/> <br/>
                <TextField fullWidth style={{width: '250px'}}
                           id="description"
                           label="Description"
                           value={formValues.description}
                           onChange={handleChange('description')}
                           margin="normal"/> <br/>
                <TextField fullWidth style={{width: '250px'}}
                           id="origin"
                           label="Origin"
                           value={formValues.origin}
                           onChange={handleChange('origin')}
                           margin="normal"/> <br/>
                <TextField fullWidth style={{width: '250px'}}
                           id="location"
                           label="Location"
                           value={formValues.location}
                           onChange={handleChange('location')}
                           margin="normal"/> <br/>
                {users && <FormControl fullWidth style={{width: '250px'}}>
                    <InputLabel shrink>
                        User
                    </InputLabel>
                    <Select
                        value={formValues.user}
                        onChange={handleChange('user')}
                        input={<Input value={users[2]} name="user" id="age-label-placeholder"/>}
                        name="age"
                    >
                        <MenuItem value=" "> Please select a value </MenuItem>
                        {users && users.map((e,key) => <MenuItem key={key} value={e.id}> {e.name} </MenuItem>)}
                    </Select>
                </FormControl>}

                <br/>
                <TextField fullWidth style={{width: '250px'}}
                           id="quality"
                           label="Quality"
                           value={formValues.quality}
                           onChange={handleChange('username')}
                           margin="normal"/> <br/>
            </form>
        </div>
    )
}

export default CreateProductPage;