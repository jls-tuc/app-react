import axios from 'axios'
import { config } from '../utils/config'

const urlApi = config.apiUrl;

export const getAll = async (modelo: string) => {
    const url = urlApi + modelo;
    return await axios.get(url);
};

export const create = async (modelo: string, datos: any ) => {
    const url = urlApi + modelo;
    return await axios.post(url, datos)
}

export const getOne = async (modelo: string, id: string ) => {
    const url = urlApi + modelo + '/'+id;
    return await axios.get(url);
}

export const update = async (modelo: string, id: string, datos: any ) => {
    const url = urlApi + modelo + '/'+id;
    return await axios.put(url, datos)
}

export const destroy = async (modelo: string, id: string ) => {
    const url = urlApi + modelo + '/'+id;
    return await axios.delete(url);
}



