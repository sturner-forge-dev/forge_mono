import { useEffect } from 'react'
// import { useForm } from '@tanstack/react-form'
import { useQuery } from '@tanstack/react-query'
import { userQueryOptions } from '@/lib/api.js'

function Profile() {
  useEffect(() => {
    document.title = 'Forge Fitness | Profile'
  }, [])

  const { isPending, error, data } = useQuery(userQueryOptions)

  if (isPending) return <p>Loading...</p>
  if (error) return <p>Not Logged In</p>

  // const form = useForm({
  //   defaultValues: {
  //     username: '',
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     phone: '',
  //     dateOfBirth: '',
  //     country: '',
  //     configuration: {
  //       height: '',
  //       weight: ''
  //     }
  //   },
  //   onSubmit: async ({ value }) => {
  //     // This is where the form submission logic will go
  //     console.log('Form submitted', value)
  //   }
  // })

  return (
    <div className="p-2 text-zinc-300">
      Hello from Profile!
      <p className="text-zinc-300">Hello {data.user.family_name}</p>
      <a href="/api/logout">Logout</a>
    </div>
  )
}

export default Profile
