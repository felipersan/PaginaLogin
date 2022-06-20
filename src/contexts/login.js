import React, { createContext, useState } from 'react'

export const LoginContext = createContext({})

export default function LoginProvider({ children }) {
  const [user, setUser] = useState('')

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  )
}
