import { useQuery, gql } from "@apollo/client";

export const getAllProdect = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;