import {Games} from "../hooks/useGames.ts";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCropImageUrl from "../services/image-url.ts";
import Emoji from "./Emoji.tsx";

export interface Props {
	game: Games;
}

function GameCard ( {game}: Props ) {
	return (
		<Card>
			<Image src={getCropImageUrl( game.background_image )} maxHeight="150px"/>
			<CardBody>
				<HStack justifyContent="space-between" spacing={2} marginBottom={3}>
					<PlatformIconList platforms={game.parent_platforms.map( p => p.platform )}/>
					<CriticScore score={game.metacritic}/>
				</HStack>
				<Heading fontSize="2xl">{game.name}<Emoji rating={game.rating_top}/></Heading>
			</CardBody>
		</Card>
	);
}

export default GameCard;