import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API_KEY;

export default axios.create( {
	baseURL: "https://api.rawg.io/api",
	params : {
		key: apiKey,
	},
} );
