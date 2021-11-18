const getMatches = () => {
    return fetch(`http://localhost:9000/api/getUserMatches`)
    .then(data => data.json())
}

export { getMatches }
