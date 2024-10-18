import pg from 'pg'

const config = {
    connectionString: 'postgresql://postgres:BtsPRcdyVAZGZvVpGChybFXrPjbocnMK@junction.proxy.rlwy.net:16877/railway',
    ssl: {
      rejectUnauthorized: false // Required for secure connections
    },
}

export const pool = new pg.Pool(config)