import axios from 'axios';

export const getAxolotl = () => {
    return (dispatch) => {
        dispatch({type: FETCH_START});
        axios.get('https://thingproxy.freeboard.io/fetch/https://axoltlapi.herokuapp.com/', { crossdomain: true })
        .then(res => {
          dispatch({type: FETCH_SUCCESS, payload:res.data});
        })
        .catch(err => {
          dispatch({type: FETCH_FAIL, payload:err});
        })
    }
}

export const FETCH_START = "FETCH_START";
export const fetchStart = () => {
    return({type:FETCH_START})
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (axolotl) => {
    return({type:FETCH_SUCCESS, payload:axolotl})
}

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (err) => {
    return({type:FETCH_FAIL, payload:err})
} 