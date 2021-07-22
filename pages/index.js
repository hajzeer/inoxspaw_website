/** @format */

import CategoryListComponent from "../components/indexComponents/categoryListComponent";
import Hero from "../components/indexComponents/heroComponent";
import Layout from "../layout/layout";
import {
    GET_ALL_CATEGORIES_FOR_PRESENTATION,
    GET_IMAGES,
} from "../graphql/queries";
import { client } from "../graphql/apollo-client";
import { useRouter } from "next/router";

const Home = ({ categories, imagesCollections }) => {
    const router = useRouter();
    console.log(imagesCollections);
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
                <Hero images={imagesCollections} />
                <CategoryListComponent
                    items={categories}
                    images={imagesCollections}
                />
            </Layout>
        </>
    );
};

export const getStaticProps = async () => {
    const { data: categoriesData } = await client.query({
        query: GET_ALL_CATEGORIES_FOR_PRESENTATION,
    });
    const { data: imagesData } = await client.query({
        query: GET_IMAGES,
    });

    return {
        props: {
            categories: (await categoriesData.categories) || null,
            imagesCollections: (await imagesData.imagesCollections) || null,
        },
        revalidate: 60,
    };
};

export default Home;
