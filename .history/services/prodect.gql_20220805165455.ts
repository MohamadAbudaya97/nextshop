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