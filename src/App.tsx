import {useState} from "react";
import {Genre} from "./hooks/useGenres.tsx";
import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./componants/NavBar.tsx";
import GenresList from "./componants/GenresList.tsx";
import GameGrid from "./componants/GameGrid.tsx";

function App() {
    const [ selectedGenre, setSelectedGenre ] = useState<Genre | null>( null );

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
          <GridItem pl="2" area={"nav"}>
              <NavBar/>
          </GridItem>
          <Show above="lg">
              <GridItem pl="2" mr="4" area={"aside"}>
                  <GenresList selectedGenre={selectedGenre} onSelectGenre={( genre ) => setSelectedGenre( genre )}/>
              </GridItem>
          </Show>
          <GridItem pl="2" mr="4" area={"main"}>
              <GameGrid selectedGenre={selectedGenre}/>
          </GridItem>
      </Grid>

  );
}

export default App
