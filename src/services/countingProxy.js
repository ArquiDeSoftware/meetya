import axios from "axios";

const updateCountingProxy = (dataset) => {
    return axios.post(`http://localhost:9000/api/updateCountingProxy`, dataset)
    .then(data => data)
}

export { updateCountingProxy }