import axios from 'axios';

const baseURL = 'https://task-manager-trial.herokuapp.com/';
export let axiosInst = axios.create({
    baseURL,
    headers: {'Access-Control-Allow-Origin': '*'}
})

export const checkUserAndLogin = postData => axiosInst.post(`users/login`, postData);
export const logout = postData => axiosInst.post(`logout`, postData);
export const signup = postData => axiosInst.post('users/addUser', postData);