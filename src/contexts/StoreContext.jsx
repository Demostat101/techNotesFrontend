
import { createContext, useContext, useState } from "react";

const context = createContext()

export const storeContext = () => {
    return useContext(context)
}

export const StoreContext = ({children}) => {

  return (
    <context.Provider value={{}}>
      {children}
    </context.Provider>
  )
}


