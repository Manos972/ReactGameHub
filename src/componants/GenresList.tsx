import {Text, List, ListItem, HStack, Image, Spinner} from "@chakra-ui/react";
import useFetch from "../hooks/useFetchs.ts";
import {Genre} from "../hooks/useGenres.tsx";
import getCropImageUrl from "../services/image-url.ts";

function GenresList () {
	const {data, error, loading} = useFetch<Genre>( "/genres" );
	if ( error ) return null;
	if ( loading ) return <Spinner/>;
	return (
		<>
			<List>{error && <Text>{error}</Text>}
				{data && data.map( ( genre ) => (
					<ListItem key={genre.id} pb="4px">
						<HStack>
							<Image boxSize="32px" borderRadius={8} src={getCropImageUrl( genre.image_background )}/>
							<Text fontSize="lg">{genre.name}</Text>
						</HStack>
					</ListItem>
				) )}
			</List>
		</>
	);
}

export default GenresList;