import axios from "axios";

const getMatches = (dataset) => {
    return axios.post(`http://localhost:9000/api/getUserMatches`, dataset)
    .then(data => data)
}

export { getMatches }