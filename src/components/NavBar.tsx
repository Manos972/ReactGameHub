import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput.tsx";

interface Props {
    onSearch: ( searchText: string ) => void;
}

function NavBar ( {onSearch}: Props ) {
    return (
        <HStack justifyContent="space-between" mr='4'>
            <Image src={logo} boxSize="50px"/>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch/>
        </HStack>
    );
}

export default NavBar;