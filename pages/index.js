/** @format */

import CategoryListComponent from "../components/indexComponents/categoryListComponent";
import Hero from "../components/indexComponents/heroComponent";
import Layout from "../layout/layout";
import { GET_ALL_CATEGORIES_FOR_PRESENTATION } from "../graphql/queries";
import { client } from "../graphql/apollo-client";
import { useRouter } from "next/router";

const Home = ({ categories }) => {
    const router = useRouter();

    if (router.isFallback) {
        return (
            <>
                <Layout>
                    <Hero />
                    <div>loading...</div>
                </Layout>
            </>
        );
    }
    return (
        <>
            <Layout>
                <Hero />
                <CategoryListComponent items={categories} />
            </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    const { data } = await client.query({
        query: GET_ALL_CATEGORIES_FOR_PRESENTATION,
    });

    return {
        props: {
            categories: await data.categories,
        },
        revalidate: 60,
    };
};

export default Home;
