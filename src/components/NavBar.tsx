import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput.tsx";

function NavBar() {
    return (
        <HStack justifyContent="space-between" mr='4'>
            <Image src={logo} boxSize="50px"/>
			<SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    );
}

export default NavBar;