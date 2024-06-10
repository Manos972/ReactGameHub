import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
    return (
        <HStack justifyContent="space-between">
            <Image src={logo} boxSize="50px"/>
            <Text>NavBar</Text>
            <ColorModeSwitch/>
        </HStack>
    );
}

export default NavBar;