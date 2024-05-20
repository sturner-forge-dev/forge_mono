import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

// for migrations
const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 })
console.log('Migrating...')

await migrate(drizzle(migrationClient), { migrationsFolder: './drizzle' })
console.log('Migrations complete')
