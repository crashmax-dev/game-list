import { Button, Container } from "@chakra-ui/react"
import fetcher from "~/libs/fetcher"

const onLogout = async () => {
  const res = await fetcher('/api/auth/logout')
  if (res.ok) {
    window.location.reload()
  }
}

export const AdminPanel = () => {
  return (
    <Container display="flex" flexDirection="column">
      <div>Admin Panel</div>
      <Button onClick={onLogout}>Exit</Button>
    </Container>
  )
}
