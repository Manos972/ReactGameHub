import useFetch from "./useFetchs.ts";
import {Platform} from "./useGames.ts";

const usePlatform = () => {
	const {data, error, loading} = useFetch<Platform>( "/platforms/lists/parents" );
	return {data, error, loading};
};

export default usePlatform;