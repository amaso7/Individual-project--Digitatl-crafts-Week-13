
export const fetchPts = () => {
    return () => {
        fetch('http://localhost:5000/api/pts')
        .then(response => response.json())
        .then(pts => {
            return (pts.payload)
            //dispatch({type: 'PTS_LOADED', payload: pts})
        })
    }
}
