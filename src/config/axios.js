import axios from "axios";
export default axios.create({
    baseURL: process.env.VUE_APP_PB_INTERCOM_202111_INTF,
    headers: {
        "Authorization": "Bearer "
    }
});


