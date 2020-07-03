const axios = require('axios');

class StudentService {
    constructor(){
        this.URI = 'http://localhost:5000/student';
    }

    getStudentGrades() {
        return axios.get(this.URI);
    }
}

export default StudentService;