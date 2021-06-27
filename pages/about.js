/** @format */

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import Layout from "../layout/layout";
import { colors, fontWeight, fontSize, zIndex } from "../utils";

const Container = styled.section`
    width: 100%;
    height: 100vh;
    margin: 0;

    overflow: hidden;
`;

const ImageOuter = styled.div`
    width: 100%;
    position: relative;
    right: -40px;

    clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
    z-index: ${zIndex.levelMinus1};
`;

const Paragraph = styled.p`
    margin: 35px 20px 0 20px;
    font-size: ${fontSize.smallFont};

    color: ${colors.darkGreyHEX};
`;

const Subject = styled.h1`
    margin: 0 0 0 20px;
    color: ${colors.mainHEX};
    font-size: ${fontSize.bigFont};
    font-weight: ${fontWeight.fontWeightMedium};
    z-index: ${zIndex.level5};
`;

const ButtonStyled = styled.button`
    margin: 20px 0 0 0;
    padding: 0;
    position: relative;

    left: 20px;
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

const About = () => {
    return (
        <Layout>
            <Container>
                <ImageOuter>
                    <Image
                        src='/thirdImage.jpg'
                        width={400}
                        height={300}
                        quality={100}
                    />
                </ImageOuter>
                <Subject>O NAS</Subject>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec fermentum libero ac odio convallis, ut feugiat felis
                    viverra. Duis sollicitudin iaculis aliquet. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Donec fermentum
                    libero ac odio convallis, ut feugiat felis viverra. Duis
                    sollicitudin iaculis aliquet. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Donec fermentum libero ac odio
                    convallis, ut feugiat felis viverra. Duis sollicitudin
                    iaculis aliquet.
                </Paragraph>
                <Link href='/categories'>
                    <ButtonStyled />
                </Link>
            </Container>
        </Layout>
    );
};

export default About;
