/** @format */

import styled from "styled-components";
import { colors, fontWeight, fontSize, zIndex } from "../../utils";
import Image from "next/image";
import Link from "next/link";

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

        &:hover {
            color: ${colors.defaultWhiteHEX};
            transform: scale(1.1)
                ${(props) => (props.translate ? "translateX(-50px)" : "")};
            width: 110%;
        }
    }
`;

const Subject = styled.h3`
    align-self: ${(props) => (props.flex ? "flex-end" : "flex-start")};

    margin: 20px 50px 0 50px;
    text-transform: uppercase;

    color: ${colors.darkGreyHEX};
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
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.flex ? "flex-end" : "flex-start")};
    align-content: center;
    align-self: ${(props) => (props.flex ? "flex-end" : "flex-start")};
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);

    @media (min-width: 1024px) {
        width: 80%;
        height: 400px;
    }
`;

const ProductsList = ({ items }) => {
    let helper;
    return (
        <>
            {items ? (
                items.map((item) => {
                    const index = items.indexOf(item);
                    index % 2 === 0 ? (helper = false) : (helper = true);

                    return (
                        <Link href={`/product/${item.Slug}`}>
                            <Container
                                translate={helper}
                                flex={helper}
                                polygon={helper}
                                key={item.id}>
                                <Subject flex={helper}>{item.Name}</Subject>
                                <ImageOuter flex={helper}>
                                    <Image
                                        src={item.Images[0].url}
                                        layout='fill'
                                        objectFit='scale-down'
                                    />
                                </ImageOuter>
                            </Container>
                        </Link>
                    );
                })
            ) : (
                <div>Nothing</div>
            )}
        </>
    );
};

export default ProductsList;
