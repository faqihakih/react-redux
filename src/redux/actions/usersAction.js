import axios from '../../config/axios'

export const fetchUsers = () => {
    return (dispatch) => {
        axios
        .get("api/users?page=2")
        .then(({data}) => {
            console.log(data.data);
            return dispatch({type : "FETCH_USERS", payload : data.data})
        })
        .catch((error) => {
            console.log("failed get data");
        })
    }
}