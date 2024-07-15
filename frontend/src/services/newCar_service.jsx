import { sample_newcar } from "../data";

export const getAll = async () => sample_newcar;

export const search = async (searchTerm) => sample_newcar.filter(item => 
    item.car_name.toLowerCase().includes(searchTerm.toLowerCase))
