import { createFileRoute } from '@tanstack/react-router'
import UserProfile from '@/components/ui/User/Profile'

export const Route = createFileRoute('/_authenticated/profile')({
  component: Profile
})

function Profile() {
  return (
    <>
      <UserProfile />
    </>
  )
}
