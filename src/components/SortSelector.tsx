import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Props {
	onSelectedOrder: ( sortOrder: string ) => void;
	sortOrder: string;
}

function SortSelector ( {onSelectedOrder, sortOrder}: Props ) {
	const sortOrders = [
		{value: "", label: "Relevance"},
		{value: "-added", label: "Date added"},
		{value: "-metacritic", label: "Popularity"},
		{value: "-name", label: "Name"},
		{value: "-rating", label: "Average rating"},
		{value: "-released", label: "Date release"},
	];

	const currentOrder = sortOrders.find( order => order.value === sortOrder );
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown/>}>
				Sort by : {currentOrder?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map( ( order ) => (
					<MenuItem key={order.value} onClick={() => onSelectedOrder( order.value )}>{order.label}</MenuItem>
				) )}
			</MenuList>
		</Menu>
	);
}

export default SortSelector;