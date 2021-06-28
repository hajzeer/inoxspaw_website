/** @format */

import styled from "styled-components";
import { colors, fontSize, fontWeight } from "../../utils";
import Link from "next/link";
const Container = styled.section`
    position: relative;
    top: -50px;
    left: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
`;

const Subject = styled.h2`
    margin: 0;
    color: ${colors.darkGreyHEX};
    font-size: ${fontSize.midFont};
    font-weight: ${fontWeight.fontWeightReagular};
    text-transform: uppercase;
    transition-duration: 0.2s;

    &:focus {
        color: ${colors.mainHEX};
    }
    &:hover {
        color: ${colors.mainHEX};
        transform: scale(1.1) translateX(20px);
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
