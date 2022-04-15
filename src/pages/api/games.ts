import { withSessionRoute } from '~/libs/iron-session';
import { dbConnect } from '~/libs/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'

export default withSessionRoute(games)

async function games(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect()
  const { method } = req

  console.log(req.session.user)

  if (method === 'GET') {
    return res.json({})
  }

  if (method === 'POST') {
    return res.json({})
  }

  if (method === 'DELETE') {
    return res.json({})
  }
}
