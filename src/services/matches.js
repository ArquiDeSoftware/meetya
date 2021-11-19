import axios from "axios";

const getMatches = (data) => {
    return axios.post(`http://localhost:9000/api/getUserMatches`, data)
    .then(data => data.json())
}

export { getMatches }