import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.tsx";
import GameCard from "./GameCard.tsx";


function GameGrid () {
	const {error, games} = useGames();
	return (
		<>
			<h3>Grid Games</h3>
			{error && <Text>{error}</Text>}
			{games && (
				<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={2} spacing={10}>
					{games.map( ( game ) => (
						<GameCard key={game.id} game={game}/>
					) )}
				</SimpleGrid>
			)}
		</>
	);
}

export default GameGrid;