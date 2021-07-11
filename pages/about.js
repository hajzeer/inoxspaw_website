/** @format */

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import Layout from "../layout/layout";
import { colors, fontWeight, fontSize, zIndex } from "../utils";

const Container = styled.section`
    padding: 0 0 50px 0;

    overflow: hidden;

    @media (min-width: 1024px) {
        height: 90vh;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
`;

const AboutDiv = styled.div`
    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 65%;
    }
`;

const ImageOuter = styled.div`
    width: 100%;
    height: 250px;
    position: relative;

    margin: 0 0 20px 20px;

    clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
    z-index: ${zIndex.levelMinus1};

    @media (min-width: 1024px) {
        width: 70%;
        height: 70%;
    }
`;

const Paragraph = styled.p`
    margin: 20px 20px;
    font-size: ${fontSize.smallFont};

    color: ${colors.darkGreyHEX};

    @media (min-width: 1024px) {
        margin: 0 0 0 40px;
        font-weight: ${fontWeight.fontWeightReagular};
        font-size: ${fontSize.midFont};
    }
`;

const Subject = styled.h1`
    margin: 0 0 0 20px;
    color: ${colors.mainHEX};
    font-size: ${fontSize.bigFont};
    font-weight: ${fontWeight.fontWeightMedium};
    z-index: ${zIndex.level5};

    @media (min-width: 1024px) {
        margin: 0 0 0 40px;

        font-size: ${fontSize.bigFontDesktop};
    }
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

    @media (min-width: 1024px) {
        width: 200px;
        height: 40px;
        margin: 40px 0 0 0;
        left: 40px;
    }
`;

const About = () => {
    return (
        <Layout>
            <Container>
                <ImageOuter>
                    <Image
                        src='/thirdImage.jpg'
                        layout='fill'
                        objectFit='cover'
                    />
                </ImageOuter>
                <AboutDiv>
                    <Subject>O NAS</Subject>
                    <Paragraph>
                        InoxSpaw jest firmą projektującą i produkującą maszyny
                        rolnicze jak i całe linie produkcyjne wykorzystywane w
                        przemyśle warzywniczym.Wieloletnie doświadczenie w
                        przemyśle produkcyjnym pozwoliło nam na poznanie
                        najnowszych technologii produkcji innowacyjnych maszyn
                        rolniczych jak i urządzeń przemysłowych. Firma InoxSpaw
                        współpracuje długie lata z gospodarstwami poznając
                        najnowsze potrzeby rynku. Działalnością firmy jest
                        produkcja maszyn rolniczych głównie do dozowania,
                        czyszczenia,polerowania,sortowania warzyw i pakowania.
                        Realizujemy nietypowe zamówienia jak również produkujemy
                        seryjnie. Zapewniamy profesjonalną i fachową obsługę
                        klienta, której skutkiem jest wyposażenie w nowoczesne i
                        zautomatyzowane urządzenia i linie produkcyjne. Dla nas
                        najważniejsza jest, jakość i długa bezproblemowa
                        sprawność wykonywanych maszyn, dlatego ciągle szukamy
                        nowoczesnych rozwiązań technologicznych. Dla tego
                        dokładamy wszelkich starań, aby nasza firma rozwijała
                        się dynamicznie w branży produkcyjnej maszyn rolniczych.
                    </Paragraph>
                    <Link href='/categories'>
                        <ButtonStyled />
                    </Link>
                </AboutDiv>
            </Container>
        </Layout>
    );
};

export default About;
