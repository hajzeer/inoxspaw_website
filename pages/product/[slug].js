/** @format */
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { client } from "../../graphql/apollo-client";
import { GET_PRODUCTS, GET_PRODUCTS_DETAILS } from "../../graphql/queries";
import { colors, fontWeight, fontSize, zIndex } from "../../utils";
import Image from "next/image";
import Link from "next/link";

import Layout from "../../layout/layout";

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 0 50px 0;
`;

const ImageContainer = styled.div`
    position: relative;
    background: #fff;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    clip-path: polygon(0 20%, 100% 0%, 100% 80%, 0% 100%);
`;
const ImageOuter = styled.div`
    position: relative;
    width: 90%;
    height: 250px;
    z-index: ${zIndex.level1};
    align-self: center;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Subject = styled.h2`
    margin: 0 0 0 20px;
    align-self: center;
    text-transform: uppercase;
    color: ${colors.mainHEX};
    font-size: ${fontSize.midFont};
    font-weight: ${fontWeight.fontWeightMedium};
`;

const Paragraph = styled.p`
    margin: 20px 20px 0 20px;
    font-size: ${fontSize.smallFont};

    color: ${colors.darkGreyHEX};
`;

const ButtonStyled = styled.button`
    margin: 20px 0 0 0;
    padding: 0;
    position: relative;

    align-self: center;
    outline: none;
    cursor: pointer;

    width: 150px;
    height: 35px;
    border: none;

    z-index: ${zIndex.level4};

    color: ${colors.defaultWhiteHEX};
    font-family: "Oswald", sans-serif;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 6px;
        left: 6px;
        border: 2px solid ${colors.darkGreyHEX};
        transition-duration: 0.2s;
    }
    &:hover::before {
        transform: translateX(-6px) translateY(-6px);
        z-index: ${zIndex.levelMinus2};
    }
    &:focus::before {
        outline: none;
        transform: translateX(-6px) translateY(-6px);
        z-index: ${zIndex.levelMinus2};
    }
    &::after {
        content: "ZAPYTAJ O PRODUKT";
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid ${colors.mainHEX};

        background: ${colors.mainHEX};
        z-index: ${zIndex.levelMinus1};
        transition-duration: 0.2s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &:hover::after {
        transform: translateX(6px) translateY(6px);
    }

    &:focus::after {
        outline: none;
        transform: translateX(6px) translateY(6px);
        z-index: ${zIndex.levelMinus2};
    }
`;

const ArrowButtonPrev = styled.button`
    background: transparent;
    border: none;
    position: absolute;
    top: 40%;
    left: 20px;
    transition-duration: 0.2s;
    z-index: ${zIndex.level5};

    &:active {
        transform: translateX(-5px);
    }
`;
const ArrowButtonNext = styled.button`
    position: absolute;
    background: transparent;
    border: none;
    top: 40%;
    right: 20px;
    transition-duration: 0.2s;
    z-index: ${zIndex.level5};

    &:active {
        transform: translateX(5px);
    }
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
const ImageStyled = styled(Image)`
    display: inline-block;
    visibility: ${(props) => (props.active ? "visible" : "hidden")};
    animation: ${(props) => (props.active ? fadeIn : fadeOut)} 0.2s linear;
    transition: visibility 0.2s linear;
`;

const Products = ({ products }) => {
    const [current, setCurrent] = useState(0);

    const productsValue = products[0];
    const ImageArray = productsValue.Images.length;

    console.log(productsValue);

    const nextSlide = () => {
        setCurrent(current === ImageArray - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? ImageArray - 1 : current - 1);
    };

    return (
        <Layout>
            <Container>
                <ImageContainer>
                    <ArrowButtonPrev onClick={prevSlide}>
                        <i class='gg-chevron-left'></i>
                    </ArrowButtonPrev>
                    <ArrowButtonNext onClick={nextSlide}>
                        <i class='gg-chevron-right'></i>
                    </ArrowButtonNext>
                    {productsValue.Images.map((image, index) => {
                        return (
                            <>
                                {index === current && (
                                    <ImageOuter>
                                        <ImageStyled
                                            active={current === index}
                                            src={image.url}
                                            layout='fill'
                                        />
                                    </ImageOuter>
                                )}
                            </>
                        );
                    })}
                </ImageContainer>
                <Subject>{productsValue.Name}</Subject>
                <Paragraph>{productsValue.Description}</Paragraph>
                <Link href='/contact'>
                    <ButtonStyled />
                </Link>
            </Container>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const { data } = await client.query({ query: GET_PRODUCTS });
    const products = data.products;

    const paths = products.map((element) => ({
        params: { slug: element.Slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const { slug: Slug } = context.params;
    const { data } = await client.query({
        query: GET_PRODUCTS_DETAILS,
        variables: { slug: Slug },
    });
    return {
        props: {
            products: data.products,
        },
    };
};

export default Products;
