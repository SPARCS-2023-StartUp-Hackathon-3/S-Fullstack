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

        let parentPost;

        const [data] = await db.query('SELECT * FROM `post` WHERE `id`=?;', [
          id,
        ]);

        const [user] = await db.query('SELECT * FROM `user` WHERE `id`=?;', [
          data[0].user_id,
        ]);

        if (data[0].parent_id) {
          const [parent] = await db.query(
            'SELECT * FROM `post` WHERE `id`=?;',
            [data[0].parent_id]
          );
          parentPost = parent[0];
        }

        const result = {
          ...data[0],
          user: user[0],
          parent: data[0].parent_id ? parentPost : null,
        };

        return res.status(200).json(result);
      } catch (e: any) {
        console.log(e);

        return res.status(500).json({ message: e.message });
      }
    }
  }
}
