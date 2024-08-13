import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>
    <React.StrictMode>
          <App />
    </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();
