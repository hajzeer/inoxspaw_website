import styled from 'styled-components';
import Layout from '../../layout/layout';
import { client } from '../../graphql/apollo-client';
import { GET_ALL_CATEGORIES } from '../../graphql/queries';
import { gql } from '@apollo/client';



const Container = styled.section`

width: 100%;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


const CategoriesInner = ({categories}) => {
  return(
    <Layout>
    <Container>
        {categories[0].Name}
    </Container>
    </Layout>
  )
}


export const getStaticPaths = async () => {

    
    const {data} = await client.query({query: GET_ALL_CATEGORIES});
    const categories = data.categories

    const paths = categories.map((element) => ({
      params: { slug: element.Slug },
    }))
  

    return { paths, fallback: false }
  }

  export const getStaticProps = async (context) => {

    const {slug: Slug} = context.params
    const {data} = await client.query({
      query: gql`
      query Categories ($slug: String!){
        categories(where: {Slug: $slug}){
          id
          Name
          Slug
        }
      }
      `,
      variables: {slug: Slug}
    });
    return {
        props: {
            categories: data.categories
        }
    }
  }

export default CategoriesInner;