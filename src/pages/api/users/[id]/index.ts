import { db } from '@/util/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET': {
      try {
        const { id } = req.query;

        const [data] = await db.query('SELECT * FROM `user` WHERE `id`=?;', [
          id,
        ]);

        return res.status(200).json(data[0]);
      } catch (e) {
        console.log(e);
        return res.status(500);
      }
    }
  }
}
