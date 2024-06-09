import {Grid, GridItem} from '@chakra-ui/react'

function Acceuil() {
    return (
        <div>
            <Grid
                templateAreas={`"nav nav"
                  "aside main"
                  "aside footer"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'150px 1fr'}
                h='200px'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='2' bg='orange.300' area={'nav'}>
                    Header
                </GridItem>
                <GridItem pl='2' bg='pink.300' area={'nav'}>
                    Nav
                </GridItem>
                <GridItem pl='2' bg='red.300' area={'aside'}>
                    Aside
                </GridItem>
                <GridItem pl='2' bg='green.300' area={'main'}>
                    Main
                </GridItem>
                <GridItem pl='2' bg='blue.300' area={'footer'}>
                    Footer
                </GridItem>
            </Grid>
        </div>
    );
}

export default Acceuil;