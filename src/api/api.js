import axios from 'axios';

export const api = axios.create({
  method: 'GET',
  baseURL: 'https://coingecko.p.rapidapi.com',
  params: {vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc'},
  headers: {
    'X-RapidAPI-Key': '4679cf9374msh3e82f8d8e73279ep18f35bjsnba0e3e15e612',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
})

export const handleGetDataCoins = () => {
    return api("/coins/markets").then(data=>data)
}