import {SimpleGrid, Text} from "@chakra-ui/react";
import {Games} from "../hooks/useGames.tsx";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import useFetch from "../hooks/useFetchs.ts";


function GameGrid () {
	const {error, data, loading} = useFetch<Games>( "/games" );
	const skeletons = [ 1, 2, 3, 4, 5, 6 ];
	return (
		<>
			{error && <Text>{error}</Text>}
			{data && (
				<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10}>
					{loading && skeletons.map( skeleton =>
						<GameCardContainer>
							<GameCardSkeleton key={skeleton}/>
						</GameCardContainer> )}
					{data.map( ( game ) => (
						<GameCardContainer>
							<GameCard key={game.id} game={game}/>
						</GameCardContainer>
					) )}
				</SimpleGrid>
			)}
		</>
	);
}

export default GameGrid;