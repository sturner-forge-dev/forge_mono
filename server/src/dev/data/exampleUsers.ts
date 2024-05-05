import type { User } from '../../models/User'

const exampleUsers: User[] = [
  {
    id: 1,
    email: 'sometestemail@yahoo.com',
    password: 'password',
    active: true,
    role: 'user'
  },
  {
    id: 2,
    email: 'anotheremail@gmail.com',
    password: '123456',
    active: true,
    role: 'user'
  },
  {
    id: 3,
    email: 'testuser@hotmail.com',
    password: 'qwerty',
    active: false,
    role: 'user'
  },
  {
    id: 4,
    email: 'admin@example.com',
    password: 'admin123',
    active: true,
    role: 'admin'
  },
  {
    id: 5,
    email: 'guest@example.com',
    password: 'guest123',
    active: true,
    role: 'guest'
  }
]

export default exampleUsers
