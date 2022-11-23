import axios from 'axios';

export const api = axios.create({
    baseURL:'https://coinranking1.p.rapidapi.com'
})

export const handleGetDataCoin = () =>{
    return api(`/coins`).then(data => data)
}