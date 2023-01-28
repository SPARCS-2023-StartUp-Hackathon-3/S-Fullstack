import mysql from 'mysql2';

export const db = mysql
  .createPool({
    host: process.env.DB_HOST,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  })
  .promise();
