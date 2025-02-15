import axios from "axios";

export const FETCH_SMURFS_DATA_START = "FETCH_SMURFS_DATA_START";
export const FETCH_SMURFS_DATA_SUCCESS = "FETCH_SMURFS_DATA_SUCCESS";
export const FETCH_SMURFS_DATA_FAILURE = "FETCH_SMURFS_DATA_FAILURE";

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_DATA_START });
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res => {
                console.log("GET Request Response: ", res);
                dispatch({ type: FETCH_SMURFS_DATA_SUCCESS, payload: res });
            })
            .catch(err => {
                dispatch({ type: FETCH_SMURFS_DATA_FAILURE, payload: err });
            });
    };
};