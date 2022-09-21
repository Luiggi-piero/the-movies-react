const API_URL = process.env.REACT_APP_THEMOVIEDB;
const API_TOKEN = process.env.REACT_APP_THEMOVIEDB_TOKEN;

export function get(path){
    return fetch(API_URL + path, {
            headers:{
                Authorization: "Bearer " + API_TOKEN,
                "Content-Type": "application/json;charset=utf-8"
            }
        })
        .then( res => res.json())
}