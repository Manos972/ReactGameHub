import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App.tsx";

interface Props {
	gameQuery: GameQuery;
}

function DynamicHeading ( {gameQuery}: Props ) {

	const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

	return (
		<Heading marginY={5} as="h2" size="xl">{heading}</Heading>
	);
}

export default DynamicHeading;