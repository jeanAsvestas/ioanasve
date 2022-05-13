import axios from "../config/axios";

const getAllAssets = () => {
    return axios.get("/asset/2021-11");
}
const getOneAsset = (id) => {
    return axios.get(`/asset/2021-11/${id}`);
}
const createAsset = (data) => {
    return axios.post("/asset/2021-11", data);
}
const updateAsset = (id, data) => {
    return axios.put(`/asset/2021-11/${id}`, data);
}
const removeAsset = (id) => {
    return axios.delete(`/asset/2021-11/${id}`);
}


let AssetService = {
    getAllAssets,
    getOneAsset,
    createAsset,
    updateAsset,
    removeAsset
}

export default AssetService;