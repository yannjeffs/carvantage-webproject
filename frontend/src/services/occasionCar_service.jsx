import { sample_occasioncar } from "../data";

export const getAll = async () => sample_occasioncar;

export const search = async (searchTerm) => sample_occasioncar.filer(item => 
    item.car_name.toLowerCase().includes(searchTerm.toLowerCase())
)
