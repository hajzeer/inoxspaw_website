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
  console.log(categories)
  return(
    <Layout>
    <Container>
        {categories[0].Name}
    </Container>
    </Layout>
  )
}


export const getStaticPaths = async () => {
    // Call an external API endpoint to get posts
    
    const {data} = await client.query({query: GET_ALL_CATEGORIES});
    const categories = data.categories
    // Get the paths we want to pre-render based on posts
    const paths = categories.map((element) => ({
      params: { slug: element.Slug },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
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