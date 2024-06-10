import {Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from "./NavBar.tsx";
import GameGrid from "./GameGrid.tsx";

function Acceuil() {
    return (

            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg  : `"nav nav" "aside main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    lg  : "250px 1fr",
                }}
            >
                <GridItem pl='2' area={'nav'}>
                    <NavBar/>
                </GridItem>
                <Show above="lg">
                    <GridItem pl="2" mr="4" area={"aside"}>
                        Aside
                    </GridItem>
                </Show>
                <GridItem pl="2" mr="4" area={"main"}>
                    <GameGrid/>
                </GridItem>
            </Grid>

    );
}

export default Acceuil;