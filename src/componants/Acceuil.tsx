import {Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from "./NavBar.tsx";

function Acceuil() {
    return (

            <Grid
                templateAreas={{
                    base: `"nav" "main" "footer"`,
                    lg: `"nav nav"
                        "aside main"
                        "aside main"
                        "footer footer"`
                }}
                gridTemplateRows={'50px 1fr 30px'}
                h='200px'
                gap='1'
                color='whitesmoke'
                fontWeight='bold'
            >

                <GridItem pl='2' area={'nav'}>
                    <NavBar>
                    </NavBar>
                </GridItem>
                <Show above="lg">
                    <GridItem pl='2' bg='red.300' area={'aside'}>
                        Aside
                    </GridItem>
                </Show>
                <GridItem pl='2' bg='green.300' area={'main'}>
                    Main
                </GridItem>
                <GridItem pl='2' bg='blue.300' area={'footer'}>
                    Footer
                </GridItem>
            </Grid>

    );
}

export default Acceuil;