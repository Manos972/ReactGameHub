import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.tsx";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";


function GameGrid () {
	const {error, games, loading} = useGames();
	const skeletons = [ 1, 2, 3, 4, 5, 6 ];
	return (
		<>
			{error && <Text>{error}</Text>}
			{games && (
				<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10}>
					{loading && skeletons.map( skeleton =>
						<GameCardContainer>
							<GameCardSkeleton key={skeleton}/>
						</GameCardContainer> )}
					{games.map( ( game ) => (
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