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

export const GET_CATEGORIES_DETAILS = gql`
query Categories  ($slug: String!){
  categories (where: {Slug: $slug}){
	Name
  Image {
    url
  }
    products {
      Name  
      Images {
        url
      }
    }
  }
}
`;
