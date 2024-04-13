import axios from 'axios'

const axiosIntance = axios.create({
    baseURL : 'https://localhost:44318/ControleFinanceiro',
    headers:{
        'Content-Type' : 'application/json'
    }
})

export default axiosIntance