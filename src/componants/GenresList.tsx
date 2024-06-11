import {Text, Image} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres.tsx";

function GenresList () {
	const {genres, error} = useGenres();

	return (
		<>
			<ul>
				{error && <Text>{error}</Text>}
				{genres.map( ( genre ) => (
					<li key={genre.id}><Image src={genre.image_background}/> {genre.name}</li>
				) )}
			</ul>
		</>
	);
}

export default GenresList;