import {SET_USER, SET_LOGOUT, SET_LOADING} from './types';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export const setUser = user => dispatch => {
    axios.get(`${BACKEND_URL}/details`, {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }).then(res => {
        let data = {
            userData: res.data.success,
            token: user.token
        }
        localStorage.setItem("auth", JSON.stringify(data))
        dispatch({
            type: SET_USER,
            payload: data
        });
        dispatch({
            type: SET_LOADING,
            payload: false
        });
    }).catch(err => {
        console.log(err);
    });
};

export const destroyUser = () => dispatch => {
    localStorage.removeItem("auth");
    dispatch({
        type: SET_LOGOUT,
    });
}

export const setLoading = bool => dispatch => {
    dispatch({
        type: SET_LOADING,
        payload: bool
    })
}