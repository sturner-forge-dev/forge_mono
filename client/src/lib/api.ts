import { hc } from 'hono/client'
import { queryOptions, useQuery } from '@tanstack/react-query'

import { type ApiRoutes } from '@server/app'
import { getCurrentUser } from '@/components/ui/User/apiCalls'

const client = hc<ApiRoutes>('/')

export const userQueryOptions = queryOptions({
  queryKey: ['get-current-user'],
  queryFn: getCurrentUser,
  staleTime: Infinity
})

export const api = client.api
