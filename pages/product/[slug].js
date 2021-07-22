/** @format */
import { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { client } from "../../graphql/apollo-client";
import { GET_PRODUCTS, GET_PRODUCTS_DETAILS } from "../../graphql/queries";
import { colors, fontWeight, fontSize, zIndex } from "../../utils";
import Image from "next/image";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";

import Layout from "../../layout/layout";
import Modal from "../../components/productsComponents/modal";
import SpecTable from "../../components/productsComponents/SpecTable";

const Container = styled.section`
    width: 100%;
    min-height: 120vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 0 50px 0;
`;

const BackgroundHelper = styled.div`
    display: none;
    position: absolute;
    width: 100%;
    @media (min-width: 1024px) {
        display: inline;
        position: absolute;
        width: 100%;
        height: 120%;
        z-index: ${zIndex.levelMinus1};
        clip-path: polygon(0 15%, 100% 0%, 100% 85%, 0% 100%);

        background: #fff;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    background: #fff;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    clip-path: polygon(0 20%, 100% 0%, 100% 80%, 0% 100%);

    @media (min-width: 1024px) {
        flex: 5;
        margin: 0 30px 0 0;
        clip-path: none;
        background: transparent;
    }
`;
const ImageOuter = styled.div`
    position: relative;
    width: 90%;
    height: 450px;
    z-index: ${zIndex.level1};
    align-self: center;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Subject = styled.h2`
    align-self: center;
    text-transform: uppercase;
    color: ${colors.mainHEX};
    font-size: ${fontSize.midFont};
    font-weight: ${fontWeight.fontWeightMedium};

    @media (min-width: 1024px) {
        font-size: ${fontSize.bigFontDesktop};
        align-self: ${(props) =>
            props.alignSubject ? "flex-start" : "center"};
        margin: 0 0 0 20px;
    }
`;

const Paragraph = styled.p`
    margin: 20px 20px 0 20px;
    font-size: ${fontSize.smallFont};

    color: ${colors.darkGreyHEX};

    @media (min-width: 1024px) {
        font-size: ${fontSize.smallFont};
    }
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
    left: 15px;
    transition-duration: 0.2s;
    z-index: ${zIndex.level5};
    cursor: pointer;

    &:active {
        transform: translateX(-5px);
    }
`;
const ArrowButtonNext = styled.button`
    position: absolute;
    background: transparent;
    border: none;
    top: 40%;
    right: 15px;
    transition-duration: 0.2s;
    z-index: ${zIndex.level5};
    cursor: pointer;

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

const TableOuter = styled.div`
    width: 100%;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TableStyled = styled.table`
    width: 90%;
    border-spacing: 3px;

    @media (min-width: 1024px) {
        width: 65%;
    }
`;

const InfoTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        flex: 3;
        margin: 0 0 0 30px;
    }
`;

const UpperSideOfPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        justify-content: space-around;
    }
`;

const DivHelper = styled.div`
    display: none;

    @media (min-width: 1024px) {
        display: flex;

        flex: 1;
    }
`;

const Products = ({ products }) => {
    const [current, setCurrent] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const myRef = useRef();

    const productsValue = products[0];
    const ImageArray = productsValue.Images.length;

    const handleClick = () => {
        if (isVisible === false) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const nextSlide = () => {
        setCurrent(current === ImageArray - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? ImageArray - 1 : current - 1);
    };

    const handerLeft = useSwipeable({
        onSwipedLeft: () => {
            setCurrent(current === ImageArray - 1 ? 0 : current + 1);
        },
    });
    const handlerRight = useSwipeable({
        onSwipedRight: () => {
            setCurrent(current === 0 ? ImageArray - 1 : current - 1);
        },
    });

    const refPassthrough = (el) => {
        // call useSwipeable ref prop with el
        handerLeft.ref(el);
        handlerRight.ref(el);

        // set myRef el so you can access it yourself
        myRef.current = el;
    };

    return (
        <Layout>
            <Container>
                <BackgroundHelper />
                <Modal
                    isVisible={isVisible}
                    prevSlide={prevSlide}
                    nextSlide={nextSlide}
                    items={productsValue}
                    ref={refPassthrough}
                    current={current}
                    setVisibility={handleClick}
                />
                <UpperSideOfPage>
                    <ImageContainer>
                        <ArrowButtonPrev onClick={prevSlide}>
                            <i className='gg-chevron-left'></i>
                        </ArrowButtonPrev>
                        <ArrowButtonNext onClick={nextSlide}>
                            <i className='gg-chevron-right'></i>
                        </ArrowButtonNext>
                        {productsValue.Images.map((image, index) => {
                            return (
                                <>
                                    {index === current && (
                                        <ImageOuter
                                            key={index}
                                            ref={refPassthrough}
                                            onClick={handleClick}>
                                            <ImageStyled
                                                active={current === index}
                                                src={image.url}
                                                layout='fill'
                                                objectFit='scale-down'
                                            />
                                        </ImageOuter>
                                    )}
                                </>
                            );
                        })}
                    </ImageContainer>
                    <DivHelper />
                    <InfoTextContainer>
                        <Subject alignSubject>{productsValue.Name}</Subject>
                        <Paragraph>{productsValue.Description}</Paragraph>
                    </InfoTextContainer>
                </UpperSideOfPage>
                <Subject>DANE TECHNICZNE</Subject>
                <TableOuter>
                    <TableStyled>
                        <tbody>
                            <SpecTable items={productsValue} />
                        </tbody>
                    </TableStyled>
                </TableOuter>
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
            products: await data.products,
        },
    };
};

export default Products;
