import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

function SortSelector () {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown/>}>
				Sort by : Relevance
			</MenuButton>
			<MenuList>
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date release</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Popularity</MenuItem>
				<MenuItem>Average rating</MenuItem>
				<MenuItem>Date added</MenuItem>
			</MenuList>
		</Menu>
	);
}

export default SortSelector;