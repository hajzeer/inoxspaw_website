import { gql } from '@apollo/client';


export const GET_ALL_CATEGORIES = gql`
query Categories{
  categories {
    id
    Name
    Slug
  }
}
`;

export const GET_ALL_CATEGORIES_FOR_PRESENTATION = gql`
query CategoriesLong{
  categories {
    id
    Name
    Image {
      url
    }
    Slug
  }
}
`;

