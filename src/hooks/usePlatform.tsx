import useFetch from "./useFetchs.ts";
import {Platform} from "./useGames.tsx";

const usePlatform = () => {
	const {data, error, loading} = useFetch<Platform>( "/platforms/lists/parents" );
	return {data, error, loading};
};

export default usePlatform;