import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform.tsx";

function ChevronDownIcon () {
	return null;
}

function PlatformSelector () {
	const {data, error} = usePlatform();
	if ( error ) return null;
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
				Plateforme
			</MenuButton>
			<MenuList>
				{data.map( ( item, index ) => (
					<MenuItem key={index} onClick={() => console.log( item.name )}>{item.name}</MenuItem>
				) )}
			</MenuList>
		</Menu>
	);
}

export default PlatformSelector;