const getTrips = () => {
    return fetch(`http://localhost:9000/api/getAllTrips`)
    .then(data => data.json())
}

export { getTrips }