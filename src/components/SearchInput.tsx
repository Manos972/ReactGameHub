import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BiSearch} from "react-icons/bi";
import {useRef} from "react";

interface Props {
	onSearch: ( searchText: string ) => void;
}

function SearchInput ( {onSearch}: Props ) {
	const ref = useRef<HTMLInputElement>( null );

	return (

		<form onSubmit={( event ) => {
			event.preventDefault();
			if ( ref.current ) onSearch( ref.current.value );
		}}>
			<InputGroup>
				<InputLeftElement children={<BiSearch/>}/>
				<Input ref={ref} variant="filled" placeholder="Rechercher un jeux ..." borderRadius={20} size="md"/>
			</InputGroup>
		</form>
	);
}

export default SearchInput;