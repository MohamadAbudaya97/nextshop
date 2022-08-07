
import type { NextApiRequest, NextApiResponse } from 'next'
import IProdect from '@Interface/prodect'
import {getProdects } from '@Services/prodect.service'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProdect[]>
) {
  res.status(200).json(await getProdects())
}
