import Axios from "axios";


export default Axios.create({
    baseURL: "https://api.exchangeratesapi.io/"
});