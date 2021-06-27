/** @format */

import styled from "styled-components";
import { colors, zIndex } from "../../utils";
import Image from "next/image";
import Link from "next/link";
import CategoryListInIndex from "./categoryListInIndex";

const Container = styled.section`
    position: relative;
    top: 85%;
    width: 100%;

    background: ${colors.defaultWhiteHEX};

    overflow: hidden;
`;

const ImageOuter = styled.div`
    width: 100%;
    position: relative;
    right: -80px;

    clip-path: polygon(0 0, 75% 0, 100% 100%, 0% 100%);
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
`;

const CategoryListComponent = ({ items }) => {
    return (
        <Container>
            <ImageOuter>
                <Image
                    src='/secondImage.png'
                    width={400}
                    height={300}
                    quality={100}
                />
            </ImageOuter>
            <CategoryListInIndex items={items} />
            <Link href='/categories'>
                <ButtonStyled />
            </Link>
        </Container>
    );
};
export default CategoryListComponent;
