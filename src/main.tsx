import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, ColorModeScript, theme} from '@chakra-ui/react'
import App from './App.tsx'
import Theme from "./componants/theme.ts";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
    <ChakraProvider theme={Theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <App/>
    </ChakraProvider>
</React.StrictMode>,)


