import { gql } from '@apollo/client';

export const getProdects = gql`
    query{
    products {
        name,
        image,
        inStock
    }
    }
`