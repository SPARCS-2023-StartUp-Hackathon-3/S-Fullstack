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

        const [data] = await db.query(
          'SELECT `like_count` FROM `post` WHERE `user_id`=?;',
          [id]
        );

        let total = 0;

        for (const item of data) {
          total += item.like_count;
        }

        return res.status(200).json({ likeCound: total });
      } catch (e) {
        console.log(e);
        return res.status(500);
      }
    }
  }
}
