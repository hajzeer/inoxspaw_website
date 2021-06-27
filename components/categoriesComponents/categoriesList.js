/** @format */

import styled from "styled-components";
import { colors, fontSize, fontWeight } from "../../utils";
import Link from "next/link";
import Image from "next/image";

const Container = styled.section`
    align-self: ${(props) => (props.flex ? "flex-start" : "flex-end")};
    margin: 20px 0;
    width: 90%;
    height: 250px;
    background: ${colors.defaultWhiteHEX};
    clip-path: ${(props) =>
        props.polygon
            ? "polygon(0 0, 80% 0, 100% 100%, 0% 100%)"
            : "polygon(0 0, 100% 0, 100% 100%, 20% 100%)"};

    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

const Subject = styled.h2`
    align-self: ${(props) => (props.flex ? "flex-start" : "flex-end")};
    margin: 0 20px 0 20px;

    color: ${colors.mainHEX};
    font-size: ${fontSize.midFont};
    font-weight: ${fontWeight.fontWeightMedium};
`;

const ImageOuter = styled.div`
    position: relative;
    width: 100%;
    height: 80%;
`;

const CategoriesList = ({ items, value }) => {
    return (
        <Link href={`/categories/${items.Slug}`}>
            <Container flex={value} polygon={value} key={items.id}>
                <ImageOuter>
                    <Image
                        src={items.Image.url}
                        layout='fill'
                        objectFit='cover'
                    />
                </ImageOuter>
                <Subject flex={value}>{items.Name}</Subject>
            </Container>
        </Link>
    );
};

export default CategoriesList;
