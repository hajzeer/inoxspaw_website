/** @format */

import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
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
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

const ProductsDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

const ImageOuter = styled.div`
    background: ${colors.defaultWhiteHEX};
    width: 90%;
    height: 250px;
    clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
    z-index: ${zIndex.levelMinus1};
    align-self: flex-end;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    justify-content: center;

    @media (min-width: 1024px) {
        width: 60%;
        margin: 0 0 30px 0;
        height: 400px;
    }
`;
const ImageInner = styled.div`
    position: relative;
    width: 80%;
    height: 400px;
    margin: 10px;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
`;

const Subject = styled.h2`
    position: relative;
    margin: 0 20px 0 20px;
    align-self: flex-start;
    text-transform: uppercase;
    color: ${colors.mainHEX};
    font-size: ${fontSize.bigFont};
    font-weight: ${fontWeight.fontWeightMedium};

    @media (min-width: 1024px) {
        font-size: 50px;
        width: 400px;
        top: 200px;
        left: 10%;
    }
`;
const ImageStyled = styled(Image)`
    display: inline-block;
    visibility: ${(props) => (props.active ? "visible" : "hidden")};
    animation: ${(props) => (props.active ? fadeIn : fadeOut)} 0.4s linear;
    transition: visibility 0.4s linear;
`;

const fadeIn = keyframes`
  from {
    transform: scale(.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.9);
    opacity: 1;
  }
`;

const CategoriesInner = ({ categories }) => {
    const categoryVariable = categories[0];
    const router = useRouter();

    const [current, setCurrent] = useState(0);

    const ImageArray = categoryVariable.products.length;

    useEffect(() => {
        const Interval = setInterval(() => {
            setCurrent(current === ImageArray - 1 ? 0 : current + 1);
        }, 4000);
        return () => clearInterval(Interval);
    }, [current]);
    if (router.isFallback) {
        return (
            <>
                <Layout>
                    <Container>
                        <Subject>{categoryVariable.Name}</Subject>
                        <ImageOuter>
                            {categoryVariable.products.map((item, index) => {
                                return (
                                    <>
                                        {index === current && (
                                            <ImageOuter>
                                                <ImageInner>
                                                    <ImageStyled
                                                        key={index}
                                                        active={
                                                            current === index
                                                        }
                                                        src={item.Images[0].url}
                                                        layout='fill'
                                                        objectFit='scale-down'
                                                    />
                                                </ImageInner>
                                            </ImageOuter>
                                        )}
                                    </>
                                );
                            })}
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
                {categoryVariable.products.map((item, index) => {
                    return (
                        <>
                            {index === current && (
                                <ImageOuter>
                                    <ImageInner>
                                        <ImageStyled
                                            key={index}
                                            active={current === index}
                                            src={item.Images[0].url}
                                            layout='fill'
                                            objectFit='scale-down'
                                        />
                                    </ImageInner>
                                </ImageOuter>
                            )}
                        </>
                    );
                })}
                <ProductsDiv>
                    <ProductsList items={categoryVariable.products} />
                </ProductsDiv>
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
            categories: await data.categories,
        },
    };
};

export default CategoriesInner;
