import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GenreList from "./components/GenreList.tsx";
import GameGrid from "./components/GameGrid.tsx";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/useGames.ts";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}

function App() {
    const [ gameQuery, setGameQuery ] = useState<GameQuery>( {} as GameQuery );

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
                  <GenreList selectedGenre={gameQuery.genre} onSelectGenre={( genre ) => setGameQuery( {...gameQuery, genre} )}/>
              </GridItem>
          </Show>
          <GridItem pl="2" mr="4" area={"main"}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectePlatform={( platform ) => setGameQuery( {...gameQuery, platform} )}/>
              <GameGrid gameQuery={gameQuery}/>
          </GridItem>
      </Grid>

  );
}

export default App;
