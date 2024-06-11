import useFetch from "./useFetchs.ts";

interface Genre {
	id: number;
	name: string;
	slug: string;
	image_background: string;
}

const useGenres = () => {
	const {data: genres, error, loading} = useFetch<Genre[]>( "/genres" );
	return {genres, error, loading};
};

export default useGenres;