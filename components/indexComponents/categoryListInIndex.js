/** @format */

import styled from "styled-components";
import { colors, fontSize, fontWeight, zIndex } from "../../utils";
import Link from "next/link";
const Container = styled.section`
    position: relative;
    top: -40px;
    left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
`;

const Subject = styled.h2`
    width: fit-content;
    position: relative;
    padding: 5px 30px;
    color: ${colors.darkGreyHEX};
    font-size: ${fontSize.midFont};
    font-weight: ${fontWeight.fontWeightReagular};
    text-transform: uppercase;
    transition-duration: 0.2s;
    z-index: ${zIndex.level1};
    overflow: hidden;

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: -100%;
        left: -100%;
        background: ${colors.mainHEX};
        transition-duration: 0.2s;
        z-index: ${zIndex.levelMinus1};
    }

    &:before {
        content: "";
        position: absolute;
        width: 30px;
        height: 70%;
        top: 0;
        left: -10px;
        background: ${colors.mainHEX};
        transition-duration: 0.2s;
        z-index: ${zIndex.levelMinus1};
    }

    &:focus {
        color: ${colors.defaultWhiteHEX};
        transform: scale(1.1) translateX(10px);
    }
    &:hover {
        color: ${colors.defaultWhiteHEX};
        transform: scale(1.1) translateX(10px);
    }

    &:hover::after {
        transform: translateX(100%) translateY(100%);
    }
    &:hover::before {
        opacity: 0;
    }

    @media (min-width: 1024px) {
        font-size: ${fontSize.bigFont};
    }
`;

const CategoryListInIndex = ({ items }) =>
    items.map(({ Name, id, Slug }) => {
        return (
            <Link href={`/categories/${Slug}`}>
                <Container key={id}>
                    <Subject>{Name}</Subject>
                </Container>
            </Link>
        );
    });
export default CategoryListInIndex;
