import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.taskmanager.targetbr.biz/index.php',
    timeout: 5000
});

export default api