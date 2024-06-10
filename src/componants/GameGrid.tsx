import {Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.tsx";


function GameGrid() {
    const {error, games} = useGames();
    return (
        <>
            <h3>Grid Games</h3>
            {error && <Text>{error}</Text>}
            {games && (<ul>
                    {games.map((game) => (<li key={game.id}>{game.name}</li>))}
                </ul>
            )}
        </>
    );
}

export default GameGrid;