import axios from 'axios'

import { config } from '../utils/config'

const urlApi = config.apiUrl;

export const getAll = async (modelo: string) => {
    const url = urlApi + modelo;
    return await axios.get(url);
};

