import axios from 'axios';

async function createUser(user) {
    return axios.post(`rest/user/add`, user)
        .then( res=> {return res.data})
        .catch( error => { console.log(error)})
}

async function fetchAllUsers() {
    return axios.get('/rest/user')
        .then(res => {return res.data})
        .catch(error => {console.log(error)})
}

export {createUser, fetchAllUsers}
