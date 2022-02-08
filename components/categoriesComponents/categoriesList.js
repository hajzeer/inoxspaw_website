/** @format */

import styled from "styled-components";
import { colors, fontSize, fontWeight, zIndex } from "../../utils";
import Link from "next/link";
import Image from "next/image";

const Container = styled.section`
    align-self: ${(props) => (props.flex ? "flex-end" : "flex-start")};

    position: relative;
    margin: 20px 0;
    width: 90%;
    height: 250px;
    background: ${colors.defaultWhiteHEX};
    clip-path: ${(props) =>
        props.polygon
            ? "polygon(0 0, 100% 0, 100% 100%, 20% 100%)"
            : "polygon(0 0, 80% 0, 100% 100%, 0% 100%)"};

    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.2s;

    @media (min-width: 1024px) {
        width: 100%;
        height: 400px;
        overflow: hidden;

        &:hover {
            color: ${colors.defaultWhiteHEX};
            transform: scale(1.1)
                ${(props) => (props.translate ? "translateX(-50px)" : "")};
            width: 105%;
        }
    }
`;

const Subject = styled.h2`
    align-self: ${(props) => (props.flex ? "flex-end" : "flex-start")};
    margin: 0 20px 0 20px;
    width: 60%;

    color: ${colors.mainHEX};
    font-size: ${fontSize.midFont};
    font-weight: ${fontWeight.fontWeightMedium};

    @media (min-width: 1024px) {
        font-size: ${fontSize.bigFont};
        margin: 0 70px 0 70px;
    }
`;

const ImageOuter = styled.div`
    position: relative;
    width: 75%;
    height: 75%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.flex ? "flex-end" : "flex-start")};

    align-self: ${(props) => (props.flex ? "flex-end" : "flex-start")};
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
`;

const CategoriesList = ({ items, value }) => {
    return (
        <Link href={`/categories/${items.Slug}`}>
            <Container
                translate={value}
                grid={value}
                flex={value}
                polygon={value}
                key={items.id}>
                <ImageOuter flex={value}>
                    {items.Image && (
                        <Image
                            src={items.Image.url}
                            layout='fill'
                            objectFit='scale-down'
                        />
                    )}
                </ImageOuter>
                <Subject flex={value}>{items.Name}</Subject>
            </Container>
        </Link>
    );
};

export default CategoriesList;
