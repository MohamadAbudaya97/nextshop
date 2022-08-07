import  connectMongo  from './../../db/config/index';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("connecting database")
  await connectMongo()
  console.log("connected database")
  res.status(200).json({ name: 'John Doe' })
}
