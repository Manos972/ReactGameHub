import useFetch from "./useFetchs.ts";

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

const useGames = () => {
    const {data: games, error, loading} = useFetch<Games[]>( "/games" );
    return {games, error, loading};
};

export default useGames;