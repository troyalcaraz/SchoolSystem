const axios = require('axios');

class StudentService {
    constructor(){
        this.URI = 'http://localhost:5000/users';
    }

    
    login(username) {
        return axios.post(this.URI, {'username': username})
    }
}

export default StudentService;