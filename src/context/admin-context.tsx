import { useRouter } from "next/router"
import { useContext, createContext, useEffect } from "react"
import useSWR from "swr"
import fetcher, { FetchError } from "~/libs/fetcher"
import { TelegramUserData, UserResponse } from "~/types/user"

export type AdminContextState = {
  user: UserResponse
  onLogin: (userData: TelegramUserData) => void
  onLogout: () => void
}

const AdminContext = createContext<AdminContextState>({} as AdminContextState)

export const AdminProvider: React.FC = ({ children }) => {
  const router = useRouter()
  const { data, mutate } = useSWR<UserResponse>('/api/auth/session')

  const onLogin = async (userData: TelegramUserData) => {
    try {
      mutate(
        await fetcher<UserResponse>('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
        })
      )
    } catch (err) {
      if (err instanceof FetchError) {
        console.error(err.data.message)
      } else {
        console.error('An unexpected error happened:', err)
      }
    }
  }

  const onLogout = async () => {
    mutate(
      await fetcher(
        '/api/auth/logout',
        { method: 'POST' }
      ),
      false
    )

    router.push('/')
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <AdminContext.Provider value={{
      onLogin,
      onLogout,
      user: data
    }}>
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => useContext(AdminContext)
