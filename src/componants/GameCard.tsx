import {Games} from "../hooks/useGames.tsx";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCropImageUrl from "../services/image-url.ts";

export interface Props {
	game: Games;
}

function GameCard ( {game}: Props ) {
	return (
		<>
		<Card borderRadius={10} overflow={"hidden"}>
			<Image src={getCropImageUrl( game.background_image )}/>
			<CardBody>
				<Heading fontSize="2xl">{game.name}</Heading>
				<HStack justifyContent="space-between" spacing={2}>
					<PlatformIconList platforms={game.parent_platforms.map( p => p.platform )}/>
					<CriticScore score={game.metacritic}/>
				</HStack>
			</CardBody>
		</Card>
		</>
	);
}

export default GameCard;