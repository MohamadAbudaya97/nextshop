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


export const GQLDeleteProdect = gql`
mutation DeleteProdect($deleteProdectId: String) {
  deleteProdect(id: $deleteProdectId) {
    message
    success
  }
}
`

export const GQLFindByIdProdect = gql`
mutation GetProdectById($getProdectById: String) {
  getProdectById(id: $getProdectById) {
    _id
    name
    description
    image
    brand
    rating {
      zero
      one
      tow
      three
      for
      five
      average
    }
    selected {
      title
      items {
        image
        name
      }
    }
    other {
      title
      description
    }
    price {
      cost
      price
      discount
    cost
      price
      discount
    }
    inStock
    details
    specification {
      name
      details
    }
    comments {
      userId
      data
      rating
      title
      comment
      image
    }
    relatedProductsIds
  }
}
`