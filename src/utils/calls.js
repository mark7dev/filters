import axios from "axios";

export const getBaths = async () => {
    try {
        return await axios.get('http://localhost:8001/baths');
    } catch (error) {
        console.error(error);
    }
}

export const getTypes = async () => {
    try {
        return await axios.get('http://localhost:8001/types');
    } catch (error) {
        console.error(error);
    }
}

export const getLocations = async (params) => {
    try {
        if (!params.baths) {
            delete params.baths;
        }
        if (!params.types) {
            delete params.types;
        }
        return await axios.get('http://localhost:8001/locations', { params });
    } catch (error) {
        console.error(error);
    }
}

