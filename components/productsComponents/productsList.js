/** @format */

import styled from "styled-components";
import { colors, fontWeight, fontSize, zIndex } from "../../utils";
import Image from "next/image";

const Container = styled.section`
    position: relative;
    align-self: flex-start;

    top: 100px;

    margin: 20px 0;
    width: 90%;
    height: 250px;
    background: ${colors.defaultWhiteHEX};
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0% 100%);

    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

const Subject = styled.h3`
    position: relative;

    margin: 0 0 0 20px;
    text-transform: uppercase;

    color: ${colors.darkGreyHEX};
    font-size: ${fontSize.midFont};
    font-weight: ${fontWeight.fontWeightMedium};
`;

const ImageOuter = styled.div`
    position: relative;
    width: 100%;
    height: 80%;
`;

const ProductsList = ({ items }) => {
    return (
        <>
            {items ? (
                items.map((item) => {
                    return (
                        <Container>
                            <Subject>{item.Name}</Subject>
                            <ImageOuter>
                                <Image
                                    src={item.Images[0].url}
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </ImageOuter>
                        </Container>
                    );
                })
            ) : (
                <div>Nothing</div>
            )}
        </>
    );
};

export default ProductsList;
