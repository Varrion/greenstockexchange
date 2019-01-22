import React, {useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";

function CreateProductPage(props) {

    const [formValues, setFormValues] = useState({
        name: '',
        description: '',
        origin: '',
        location: '',
        image: '',
        user: '',
        quality: '',
    });

    const handleChange = name => event => {
        setFormValues({...formValues, [name]: event.target.value});
    }

    return (
        <div>
            <form>
                <TextField fullWidth style={{width: '250px'}}
                           id="product_name"
                           label="Name"
                           value={formValues.name}
                           onChange={handleChange('username')}
                           margin="normal"/> <br/>
                <TextField fullWidth style={{width: '250px'}}
                           id="description"
                           label="Description"
                           value={formValues.description}
                           onChange={handleChange('username')}
                           margin="normal"/> <br/>
                <TextField fullWidth style={{width: '250px'}}
                           id="origin"
                           label="Origin"
                           value={formValues.origin}
                           onChange={handleChange('username')}
                           margin="normal"/> <br/>
                <TextField fullWidth style={{width: '250px'}}
                           id="location"
                           label="Location"
                           value={formValues.location}
                           onChange={handleChange('username')}
                           margin="normal"/> <br/>
                <TextField fullWidth style={{width: '250px'}}
                           id="image"
                           label="Image"
                           value={formValues.image}
                           onChange={handleChange('username')}
                           margin="normal"/> <br/>
                <TextField fullWidth style={{width: '250px'}}
                           id="user"
                           label="User"
                           value={formValues.user}
                           onChange={handleChange('username')}
                           margin="normal"/> <br/>
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