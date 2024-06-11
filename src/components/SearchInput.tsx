import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BiSearch} from "react-icons/bi";

function SearchInput () {
	return (
		<InputGroup>
			<InputLeftElement children={<BiSearch/>}/>
			<Input variant="filled" placeholder="Rechercher un jeux ..." borderRadius={20} size="md"/>
		</InputGroup>
	);
}

export default SearchInput;