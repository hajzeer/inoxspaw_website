/** @format */
import { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { colors, zIndex } from "../../utils";
import Image from "next/image";
import Link from "next/link";
import CategoryListInIndex from "./categoryListInIndex";

const Container = styled.section`
    position: relative;
    top: 85%;
    width: 100%;
    z-index: ${zIndex.level6};
    background: ${colors.defaultWhiteHEX};

    overflow: hidden;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
    }
`;

const ListDiv = styled.div`
    @media (min-width: 1024px) {
        width: 60%;
        padding: 0 0 0 40px;
    }
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
    justify-content: space-around;

    @media (min-width: 1024px) {
        padding: 20px;
        width: 80%;
        height: 500px;
        z-index: ${zIndex.level9};
    }
`;

const ButtonStyled = styled.button`
    margin: 20px 0 0 0;
    padding: 0;
    position: relative;
    outline: none;
    left: 20px;
    top: -50px;

    width: 150px;
    height: 35px;
    border: none;
    cursor: pointer;

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
        content: "ZOBACZ NASZE PRODUKTY";
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

    @media (min-width: 1024px) {
        width: 200px;
        height: 40px;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    top: -50px;
    background: #fff;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
const CategoryListComponent = ({ items }) => {
    const [current, setCurrent] = useState(0);

    const ImageArray = items.length;

    useEffect(() => {
        const Interval = setInterval(() => {
            setCurrent(current === ImageArray - 1 ? 0 : current + 1);
        }, 4000);
        return () => clearInterval(Interval);
    }, [current]);
    return (
        <Container>
            <ImageContainer>
                {items.map((item, index) => {
                    return (
                        <>
                            {index === current && (
                                <ImageOuter>
                                    <ImageStyled
                                        key={index}
                                        active={current === index}
                                        src={item.Image.url}
                                        layout='fill'
                                        objectFit='scale-down'
                                    />
                                </ImageOuter>
                            )}
                        </>
                    );
                })}
            </ImageContainer>
            <ListDiv>
                <CategoryListInIndex items={items} />
                <Link href='/categories'>
                    <ButtonStyled />
                </Link>
            </ListDiv>
        </Container>
    );
};
export default CategoryListComponent;
