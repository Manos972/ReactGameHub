import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface Genre {
	id: number;
	name: string;
	slug: string;
	image_background: string;
}

interface FetchGenre {
	count: number;
	results: Genre[];
}

const useGenres = () => {
	const [ genres, setGenres ] = useState<Genre[]>( [] );
	const [ loading, setLoading ] = useState( false );
	const [ error, setError ] = useState( "" );
	useEffect( () => {
		setLoading( true );
		const controller = new AbortController();
		apiClient.get<FetchGenre>( "/genres", {signal: controller.signal} ).then( function ( response ) {
			{
				setGenres( response.data.results );
				setLoading( false );
			}
		} ).catch( err => {
			if ( err instanceof CanceledError ) {
				return;
			}
			setError( err.message );
			setLoading( false );
		} );
		return () => controller.abort();
	}, [] );
	return {genres, error, loading};
};

export default useGenres;