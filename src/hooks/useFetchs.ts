import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

const useFetch = <T> ( endpoint: string ) => {
	const [ data, setData ] = useState<T[]>( [] );
	const [ loading, setLoading ] = useState( false );
	const [ error, setError ] = useState( "" );

	useEffect( () => {
		setLoading( true );
		const controller = new AbortController();
		apiClient.get<FetchResponse<T>>( endpoint, {signal: controller.signal} ).then( function ( response ) {
			setData( response.data.results );
			setLoading( false );
		} ).catch( err => {
			if ( err instanceof CanceledError ) return;
			setError( err.message );
			setLoading( false );
		} );
		return () => controller.abort();
	}, [ endpoint ] );

	return {data, error, loading};
};

export default useFetch;