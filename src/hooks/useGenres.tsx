import useFetch from "./useFetchs.ts";

export interface Genre {
	id: number;
	name: string;
	slug: string;
	image_background: string;
}

const useGenres = () => {
	const {data, error, loading} = useFetch<Genre[]>( "/genres" );
	return {data, error, loading};
};

export default useGenres;