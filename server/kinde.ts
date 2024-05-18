import {
  createKindeServerClient,
  GrantType,
  type SessionManager,
  type UserType
} from '@kinde-oss/kinde-typescript-sdk'
import { type Context } from 'hono'
import { getCookie, setCookie, deleteCookie } from 'hono/cookie'
import { createMiddleware } from 'hono/factory'

const deleteKeys = ['id_token', 'access_token', 'user', 'refresh_token']

// Client for authorization code flow
export const kindeClient = createKindeServerClient(
  GrantType.AUTHORIZATION_CODE,
  {
    authDomain: process.env.KINDE_DOMAIN!,
    clientId: process.env.KINDE_CLIENT_ID!,
    clientSecret: process.env.KINDE_CLIENT_SECRET!,
    redirectURL: process.env.KINDE_REDIRECT_URI!,
    logoutRedirectURL: process.env.KINDE_LOGOUT_REDIRECT_URI!
  }
)

let store: Record<string, unknown> = {}

export const sessionManager = (c: Context): SessionManager => ({
  async getSessionItem(key: string) {
    const result = getCookie(c, key)
    return result
  },
  async setSessionItem(key: string, value: unknown) {
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
      maxAge: 60 * 60 * 24 * 7
    } as const
    if (typeof value === 'string') {
      setCookie(c, key as string, value, cookieOptions)
    } else {
      setCookie(c, key as string, JSON.stringify(value), cookieOptions)
    }
  },
  async removeSessionItem(key: string) {
    deleteCookie(c, key)
  },
  async destroySession() {
    deleteKeys.forEach((key) => {
      deleteCookie(c, key)
    })
  }
})

type Env = {
  Variables: {
    user: UserType
  }
}

export const getUser = createMiddleware<Env>(async (c, next) => {
  try {
    const manager = sessionManager(c)
    const isAuthenticated = await kindeClient.isAuthenticated(manager)

    if (!isAuthenticated) {
      return c.json({ error: 'Unauthorized' }, 401)
    }

    const user = await kindeClient.getUserProfile(manager)

    c.set('user', user)
    await next()
  } catch (error) {
    console.error(error)
    return c.json({ error: 'Unauthorized' }, 401)
  }
})