/** @format */

import styled from "styled-components";
import Image from "next/image";
import Layout from "../../layout/layout";
import { client } from "../../graphql/apollo-client";
import {
    GET_ALL_CATEGORIES,
    GET_CATEGORIES_DETAILS,
} from "../../graphql/queries";
import { colors, fontWeight, fontSize, zIndex } from "../../utils";
import ProductsList from "../../components/productsComponents/productsList";
import { useRouter } from "next/router";

const Container = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

const ImageOuter = styled.div`
    background: ${colors.defaultWhiteHEX};
    width: 90%;
    height: 250px;
    position: relative;
    top: 100px;
    clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
    z-index: ${zIndex.levelMinus1};
    align-self: flex-end;
`;

const Subject = styled.h2`
    position: relative;
    margin: 0 20px 0 20px;
    top: 150px;
    align-self: flex-start;
    text-transform: uppercase;
    color: ${colors.mainHEX};
    font-size: ${fontSize.bigFont};
    font-weight: ${fontWeight.fontWeightMedium};
`;

const CategoriesInner = ({ categories }) => {
    const categoryVariable = categories[0];
    const router = useRouter();

    if (router.isFallback) {
        return (
            <>
                <Layout>
                    <Container>
                        <Subject>{categoryVariable.Name}</Subject>
                        <ImageOuter>
                            <Image
                                src={categoryVariable.Image.url}
                                layout='fill'
                                objectFit='cover'
                            />
                        </ImageOuter>
                        <Subject>Loading...</Subject>
                    </Container>
                </Layout>
            </>
        );
    }

    return (
        <Layout>
            <Container>
                <Subject>{categoryVariable.Name}</Subject>
                <ImageOuter>
                    <Image
                        src={categoryVariable.Image.url}
                        layout='fill'
                        objectFit='cover'
                    />
                </ImageOuter>
                <ProductsList items={categoryVariable.products} />
            </Container>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const { data } = await client.query({ query: GET_ALL_CATEGORIES });
    const categories = data.categories;

    const paths = categories.map((element) => ({
        params: { slug: element.Slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const { slug: Slug } = context.params;
    const { data } = await client.query({
        query: GET_CATEGORIES_DETAILS,
        variables: { slug: Slug },
    });
    return {
        props: {
            categories: data.categories,
        },
    };
};

export default CategoriesInner;
