import axios from 'axios';


let APIURL = process.env.VUE_APP_API_URL_LIVE || 'https://api.enye.tech/v1/challenge/records';

const buildURL  =  (path) => {
    return `${APIURL}${path}`;
};

export default {

    fetchUser(path){
        let url = buildURL(path);

        return axios.get(url, {
            useCredentails: true
        }).then(res => res.data)
    }
}