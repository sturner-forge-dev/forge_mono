import {
  createRootRouteWithContext,
  Link,
  Outlet
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { type QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: Root
})

function NavBar() {
  return (
    <div className="p-3 flex flex-row gap-20 max-w-max m-auto">
      <Link to="/" className="[&.active]:font-bold text-zinc-500">
        Home
      </Link>
      <Link to="/create" className="[&.active]:font-bold text-zinc-500">
        Create
      </Link>
      <Link to="/exercises" className="[&.active]:font-bold text-zinc-500">
        Exercises
      </Link>
      <Link to="/profile" className="[&.active]:font-bold text-zinc-500">
        Profile
      </Link>
    </div>
  )
}

function Root() {
  return (
    <>
      <NavBar />
      <hr />
      <div className="p-2 m-auto">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  )
}
