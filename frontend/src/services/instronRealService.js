import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export async function getInstronRealResults() {
    const response = await axios.get(`${API_URL}/resultados`);
    return response.data;
}
