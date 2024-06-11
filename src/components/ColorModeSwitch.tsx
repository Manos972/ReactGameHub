import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

function ColorModeSwitch() {
    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <HStack>
            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            <Text>Theme : {colorMode === 'light' ? 'Sombre' : 'Clair'}</Text>
        </HStack>
    );
}

export default ColorModeSwitch;