import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: () => <div className='p-2 text-zinc-300'>Hello from profile!</div>
})
