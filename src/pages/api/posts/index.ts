import { db } from '@/util/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST': {
      try {
        const { imageUrl, title, color, desc, userId, caption, parentId } =
          req.body;

        const sql =
          'INSERT INTO `post` (`image_url`, `title`, `color`, `desc`, `user_id`' +
          (caption ? ', `caption`' : '') +
          (parentId ? ', `parent_id`' : '') +
          ') VALUES (?, ?, ?, ?, ?' +
          (caption ? ', ?' : '') +
          (parentId ? ', ?' : '') +
          ');';

        const param = [
          imageUrl,
          title,
          color,
          desc,
          userId,
          ...(caption ? [caption] : []),
          ...(parentId ? [parentId] : []),
        ];

        const [data] = await db.query(sql, param);

        return res.status(200).json({ id: data.insertId });
      } catch (e: any) {
        console.log(e);
        return res.status(500).json({ message: e.message });
      }
    }
    case 'GET': {
      try {
        const { search, page, sort_by, user_id } = req.query;

        const mode = user_id
          ? search
            ? 'user_search'
            : 'user'
          : search
          ? 'search'
          : 'none';

        const sql =
          'SELECT * FROM `post` ' +
          (mode === 'user_search'
            ? 'WHERE `user_id`=? AND `desc` LIKE ? OR `title` LIKE ? OR `color` LIKE ? '
            : '') +
          (mode === 'user' ? 'WHERE `user_id`=? ' : '') +
          (mode === 'search'
            ? 'WHERE `desc` LIKE ? OR `title` LIKE ? OR `color` LIKE ? '
            : '') +
          'ORDER BY ' +
          (sort_by ? '`like_count` DESC, ' : '') +
          '`id` DESC LIMIT ' +
          (Number(page) - 1) * 10 +
          ', 10;';

        const param: any[] = [];

        if (mode === 'user_search') {
          param.push(user_id);
          param.push(`%${search}%`, `%${search}%`, `%${search}%`);
        } else if (mode === 'user') {
          param.push(user_id);
        } else if (mode === 'search') {
          param.push(`%${search}%`, `%${search}%`, `%${search}%`);
        }

        const [data] = await db.query(sql, param);
        console.log(sql);
        console.log(param);

        return res.status(200).json(data);
      } catch (e: any) {
        console.log(e);
        return res.status(500).json({ message: e.message });
      }
    }
  }
}
