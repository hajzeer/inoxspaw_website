/** @format */

import CategoryListComponent from "../components/indexComponents/categoryListComponent";
import Hero from "../components/indexComponents/heroComponent";
import Layout from "../layout/layout";
import { GET_ALL_CATEGORIES } from "../graphql/queries";
import { client } from "../graphql/apollo-client";

const Home = ({ categories }) => {
    return (
        <>
            <Layout>
                <Hero />
                <CategoryListComponent items={categories} />
            </Layout>
        </>
    );
};

export const getServerSideProps = async () => {
    const { data } = await client.query({ query: GET_ALL_CATEGORIES });

    return {
        props: {
            categories: data.categories,
        },
    };
};

export default Home;
