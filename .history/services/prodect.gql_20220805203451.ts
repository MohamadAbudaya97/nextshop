import { gql } from '@apollo/client';

export const GQLgetProdects = gql`
    query{
    products {
        name,
        image,
        inStock
    }
    }
`

export const GQLSetProdect = gql`
mutation SetProdect($req: ProdectInput) {
  setProdect(req: $req) {
    message
    success
  }
}
`