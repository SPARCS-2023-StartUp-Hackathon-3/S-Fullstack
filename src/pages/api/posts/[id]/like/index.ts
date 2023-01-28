import { db } from '@/util/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST': {
      try {
        const { id } = req.query;
        const { userId } = req.body;

        await db.query(
          'INSERT INTO `post_like` (`user_id`, `post_id`) VALUES (?, ?);',
          [userId, id]
        );

        await db.query(
          'UPDATE `post` SET `like_count`=`like_count`+1 WHERE `id`=?;',
          [id]
        );

        return res.status(200).json({ type: 'create' });
      } catch (e: any) {
        if (e.code === 'ER_DUP_ENTRY') {
          const { id } = req.query;
          const { userId } = req.body;

          try {
            await db.query(
              'UPDATE `post` SET `like_count`=`like_count`-1 WHERE `id`=?;',
              [id]
            );

            await db.query(
              'DELETE FROM `post_like` WHERE `post_id`=? AND `user_id`=?;',
              [id, userId]
            );

            return res.status(200).json({ type: 'delete' });
          } catch (e: any) {
            console.log(e);
            return res.status(500).json({ message: e.message });
          }
        }
        console.log(e);
        return res.status(500).json({ message: e.message });
      }
    }
    case 'GET': {
      try {
        const { id, user_id } = req.query;

        const [data] = await db.query(
          'SELECT * FROM `post_like` WHERE `user_id`=? AND `post_id`=?;',
          [user_id, id]
        );

        return res.status(200).json({ isLiked: !!data[0] });
      } catch (e: any) {
        console.log(e);
        return res.status(500).json({ message: e.message });
      }
    }
  }
}
