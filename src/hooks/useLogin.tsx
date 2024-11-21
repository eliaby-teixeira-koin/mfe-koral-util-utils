import { type ReactNode, createContext, useEffect, useState } from 'react'
import { requestApi } from '../api'

interface LoginContextProps {
  isLogged: boolean
  accessToken: string
  Login: ({ username, password }) => void
  Logout: () => void
}
export const LoginContext = createContext({} as LoginContextProps)

interface LoginProviderProps {
  children: ReactNode
}
export function LoginContextProvider({ children }: LoginProviderProps) {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [accessToken, setAccessToken] = useState<string>('')

  async function Login({ username, password }) {
    const response = await requestApi({
      path: '/login',
      method: 'post',
      body: {
        username,
        password
      }
    })

    console.log(response.data)

    if (response.data.accessToken) {
      setIsLogged(true)
      setAccessToken(response.data.accessToken)
      localStorage.setItem('accessToken', response.data.accessToken)
    }
  }

  function Logout() {
    console.log('call logout', accessToken)
    setIsLogged(false)
    localStorage.removeItem('accessToken')
  }

  useEffect(() => {
    const token = localStorage.getItem('accessTo ken')
    token && setAccessToken(token)
    console.log(`isLogged: ${isLogged}`);
  }, [isLogged])

  return (
    <LoginContext.Provider
      value={{
        isLogged,
        accessToken,
        Login,
        Logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
