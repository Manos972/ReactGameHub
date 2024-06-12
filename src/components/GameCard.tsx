import {Games} from "../hooks/useGames.ts";
import {Card, CardBody, Flex, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCropImageUrl from "../services/image-url.ts";
import Emoji from "./Emoji.tsx";
import GameModal from "./GameModal.tsx";

export interface Props {
	game: Games;
}

function GameCard ( {game}: Props ) {
	return (
		<Card height="360px">
			<Image src={getCropImageUrl( game.background_image )} maxHeight="150px"/>
			<CardBody>
				<HStack justifyContent="space-between" spacing={2} marginBottom={3}>
					<PlatformIconList platforms={game.parent_platforms.map( p => p.platform )}/>
					<CriticScore score={game.metacritic}/>
				</HStack>
				<HStack justifyContent="space-between">
					<Heading fontSize="lg">{game.name}</Heading>
					<Emoji rating={game.rating_top}/>
				</HStack>
			</CardBody>
			<Flex margin={3} justifyContent="space-between" alignItems="flex-end">
				<GameModal game={game}></GameModal>
			</Flex>
		</Card>
	);
}

export default GameCard;