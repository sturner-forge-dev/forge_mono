import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex flex-col gap-2">
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
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
})
