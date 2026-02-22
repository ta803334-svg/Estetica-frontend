//instalar o axios: npm install axios//serve para fazer a conexão com o backend
// importar o axios
import axios from 'axios'
const api = axios.create({baseURL:'https://estetica-backend-tkhf.onrender.com'})



export default api 