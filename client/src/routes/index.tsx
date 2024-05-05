import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  return <div className='p-2 text-zinc-300'>Hello from Home!</div>
}
