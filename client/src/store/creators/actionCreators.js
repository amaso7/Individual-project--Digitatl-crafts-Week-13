
export const fetchPts = () => {
    return (dispatch) => {
        fetch('http://localhost:5000/api/Pts')
        .then(response => response.json())
        .then(pts => {
            dispatch({type: 'Pts_LOADED', payload: pts})
        })
    }
}