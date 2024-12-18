import React, { createContext } from 'react';


const initialState = {
  users: []
}


export const UserContext  = createContext(initialState);
