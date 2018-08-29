import Axios from "../../node_modules/axios";
import { AT_POSTS } from './action-types';

const END_POINT = "/api"

export function readAllPost(){
    return dispatch => {
        Axios.get(`${END_POINT}/posts`).then(response=>{
            dispatch({
                type: AT_POSTS.READ_ALL,
                payload : response.data
            })
        })
    }
};

export function readPost(id){
    return dispatch => {
        Axios.get(`${END_POINT}/posts/${id}`).then(response=>{
            dispatch({
                type: AT_POSTS.READ,
                payload : response.data
            })
        })
    }
};

export function deletePost(id){
    return dispatch => {
        Axios.delete(`${END_POINT}/posts/${id}`).then(response=>{
            dispatch({
                type: AT_POSTS.DELETE,
                payload : response.data
            })
        })
    }
};

export function createPost(post){
    return dispatch => {
        Axios.post(`${END_POINT}/posts`, post).then(response=>{
            dispatch({
                type: AT_POSTS.CREATE,
                payload : response.data
            })
        })
    }
};