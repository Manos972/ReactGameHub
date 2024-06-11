import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import {Platform} from "../hooks/useGames.ts";
import usePlatform from "../hooks/usePlatform";

interface Props {
	onSelectePlatform: ( platform: Platform ) => void;
	selectedPlatform: Platform | null;
}

const PlatformSelector = ( {onSelectePlatform, selectedPlatform}: Props ) => {
	const {data, error} = usePlatform();

	if ( error ) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown/>}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data.map( platform => <MenuItem onClick={() => onSelectePlatform( platform )} key={platform.id}>{platform.name}</MenuItem> )}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;