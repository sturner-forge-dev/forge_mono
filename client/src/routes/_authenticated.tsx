import { createFileRoute, Outlet } from '@tanstack/react-router'
import { userQueryOptions } from '@/lib/api'

const Login = () => {
  return (
    <div className="p-2 text-zinc-300">
      <p>Please Login</p>
      <a href="/api/login">Login Here</a>
    </div>
  )
}

const Component = () => {
  const { user } = Route.useRouteContext()
  if (!user) {
    return <Login />
  }
  return <Outlet />
}

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context }) => {
    const queryClient = context.queryClient

    try {
      const data = await queryClient.fetchQuery(userQueryOptions)
      return data
    } catch (error) {
      return { user: null }
    }
  },
  component: Component
})
