import React, { useState } from "react"

export const NavigationContext = React.createContext({
  currentScreen: 0,
  setCurrentScreen: (screen: number) => {},
})

const NavigationContextComponent: React.FC = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<number>(0)

  return (
    <NavigationContext.Provider value={{ currentScreen, setCurrentScreen }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationContextComponent
