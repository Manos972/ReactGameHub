import axios from "axios";


export default axios.create( {
    baseURL: "https://api.rawg.io/api",
    params : {
        key: "99f8690ba14446de9755f754c169d9e4",
    },
} );
