import axios from 'axios'

export const ateraAPI = axios.create({
    baseURL: 'https://app.atera.com/api/v3',
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': '574885c4c38244d9875ec811ff469da4'
    }
  })