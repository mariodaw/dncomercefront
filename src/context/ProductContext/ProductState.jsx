import React, { createContext } from 'react';


const initialState = {
  products: []
}


export const ProductContext  = createContext(initialState);
