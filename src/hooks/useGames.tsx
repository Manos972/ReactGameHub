import useFetch from "./useFetchs.ts";
import {Genre} from "./useGenres.tsx";

export interface Platform {
    id: number,
    name: string;
    slug: string;
}
export interface Games {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    parent_platforms: { platform: Platform }[];
}

const useGames = ( selectedGenre: Genre | null ) => useFetch<Games>( "/games", {params: {genres: selectedGenre?.id}}, [ selectedGenre?.id ] );


export default useGames;