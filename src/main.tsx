import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import App from './App.tsx'
import './index.css'

const colors = {
    brand: {
        900: '#5d1a22',
        800: '#2a7515',
        700: '#9b2aac',
    },
}

const theme = extendTheme({colors})
ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
    <ChakraProvider theme={theme}>
        <App/>
    </ChakraProvider>
</React.StrictMode>,)


