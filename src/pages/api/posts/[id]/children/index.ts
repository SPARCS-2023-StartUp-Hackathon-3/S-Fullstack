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
          'SELECT * FROM `post` WHERE `parent_id`= ? ORDER BY `id` DESC;',
          [id]
        );

        return res.status(200).json(data);
      } catch (e: any) {
        console.log(e);
        return res.status(500).json({ message: e.message });
      }
    }
  }
}
