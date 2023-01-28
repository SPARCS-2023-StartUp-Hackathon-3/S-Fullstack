import { db } from '@/util/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST': {
      try {
        const { name } = req.body;

        const [data] = await db.query(
          'INSERT INTO `user` (`name`) VALUE (?);',
          [name]
        );

        return res.status(200).json({ id: data.insertId, name });
      } catch (e: any) {
        if (e.code === 'ER_DUP_ENTRY') {
          const { name } = req.body;

          const [data] = await db.query(
            'SELECT `id` FROM `user` WHERE `name` = ?;',
            [name]
          );

          return res.status(200).json({ id: data[0].id, name });
        }
        console.log(e);
        return res.status(500).json({ message: e.message });
      }
    }
  }
}
