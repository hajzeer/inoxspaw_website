/** @format */

import styled from "styled-components";
import Layout from "../layout/layout";
import CategoriesList from "../components/categoriesComponents/categoriesList";
import { GET_ALL_CATEGORIES_FOR_PRESENTATION } from "../graphql/queries";
import { client } from "../graphql/apollo-client";
import { colors, fontSize, fontWeight } from "../utils";
import { useRouter } from "next/router";

const Container = styled.section`
    width: 100%;
    height: auto;
`;
const Subject = styled.h2`
    text-transform: uppercase;

    color: ${colors.mainHEX};
    font-size: ${fontSize.midFont};
    font-weight: ${fontWeight.fontWeightMedium};
`;

const InnerContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`;

const products = ({ categories }) => {
    let helper;

    const router = useRouter();

    if (router.isFallback) {
        return (
            <>
                <Layout>
                    <Container>
                        <Subject>Loading...</Subject>
                    </Container>
                </Layout>
            </>
        );
    }

    return (
        <Layout>
            <Container>
                <Subject>
                    Wybierz najlepsze rozwiązania rolnicze dla siebie z naszej
                    oferty
                </Subject>
                <InnerContainer>
                    {categories.map((category) => {
                        const index = categories.indexOf(category);
                        index % 2 === 0 ? (helper = false) : (helper = true);
                        return (
                            <CategoriesList
                                key={category.id}
                                items={category}
                                value={helper}
                            />
                        );
                    })}
                </InnerContainer>
            </Container>
        </Layout>
    );
};

export const getServerSideProps = async () => {
    const { data } = await client.query({
        query: GET_ALL_CATEGORIES_FOR_PRESENTATION,
    });
    return {
        props: {
            categories: data.categories,
        },
    };
};
export default products;
