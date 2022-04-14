import { AdminPanel } from "~/components/AdminPanel"
import { TelegramWidget } from "~/components/TelegramWidget"
import { withSessionSsr } from "~/libs/iron-session"
import { validateUserId } from "~/libs/validate-user"
import type { User } from "~/types/user"

interface Props {
  user: User
}

const AdminPage = ({ user }: Props) => {
  if (user) {
    return <AdminPanel />
  }

  return (
    <TelegramWidget />
  )
}

export const getServerSideProps = withSessionSsr(
  // @ts-ignore
  async function useSSR({ req }) {
    const session = req.session.user
    if (!session?.ok) {
      return {
        props: {}
      }
    }

    const user = await validateUserId(session)
    console.log(user)

    return {
      props: {
        user
      }
    }
  }
)

export default AdminPage
