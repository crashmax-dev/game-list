import { useState } from "react"
import fetcher, { FetchError } from "~/libs/fetcher"
import { TelegramUserData, UserResponse } from "~/types/user"
import { LoadingIco, TelegramIco } from "./Icons"
import TelegramLoginWidget from "./TelegramLoginWidget"

export const TelegramWidget = () => {
  const [isLoading, setIsLoading] = useState(false)

  const onLogin = async (userData: TelegramUserData) => {
    try {
      const res = await fetcher<UserResponse>('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })

      if (res.ok) {
        window.location.reload()
      }
    } catch (err) {
      if (err instanceof FetchError) {
        console.error(err.data.message)
      } else {
        console.error('An unexpected error happened:', err)
      }
    }
  }

  if (process.env.NODE_ENV === 'development') {
    return (
      <button
        disabled={isLoading}
        className="telegram-widget"
        onClick={() => {
          setIsLoading(true)
          onLogin({
            id: 216972324,
            username: 'crashmax',
            first_name: 'Vitalij',
            last_name: 'Ryndin',
            photo_url: 'https://t.me/i/userpic/320/P3CGN4q_l5jqPbP5lctVKmcti38Q6inTB3e9gDbcCN4.jpg',
            hash: 'l5jqPbP5lctVKmcti38Q6inTB3e9gDbcCN4',
            auth_date: 0
          })
        }}
      >
        {isLoading ? <LoadingIco /> : <TelegramIco />}
        Log in with Telegram (dev)
      </button>
    )
  } else {
    return (
      <TelegramLoginWidget
        onLogin={onLogin}
        requestAccess={false}
        botId={process.env.NEXT_PUBLIC_BOT_ID}
      />
    )
  }
}
