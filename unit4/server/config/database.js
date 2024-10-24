import pg from 'pg'

const config = {
    connectionString: 'postgresql://postgres:SlqAvGFiWcYXLTdESBsFKKzbwScxroUY@junction.proxy.rlwy.net:48534/railway',
    ssl: {
      rejectUnauthorized: false // Required for secure connections
    },
}

export const pool = new pg.Pool(config)