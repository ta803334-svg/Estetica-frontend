//instalar o axios: npm install axios//serve para fazer a conexão com o backend
// importar o axios
import axios from 'axios'
const api = axios.create({baseURL:'http://localhost:3001'})



export default api 