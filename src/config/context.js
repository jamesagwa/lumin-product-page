import React, { useState, useMemo } from "react";

export const AppContext = React.createContext();

export const initialState = {
    showCart: false,
    items: [],
    currency: 'USD'
};

export function AppProvider(props) {
  const [state, setState] = useState(initialState);
  const value = useMemo(() => [state, setState], [state]);
  return <AppContext.Provider value={value} {...props} />;
}