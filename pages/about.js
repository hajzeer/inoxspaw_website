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
                        InoxSpaw jest firm?? projektuj??c?? i produkuj??c?? maszyny
                        rolnicze jak i ca??e linie produkcyjne wykorzystywane w
                        przemy??le warzywniczym.Wieloletnie do??wiadczenie w
                        przemy??le produkcyjnym pozwoli??o nam na poznanie
                        najnowszych technologii produkcji innowacyjnych maszyn
                        rolniczych jak i urz??dze?? przemys??owych. Firma InoxSpaw
                        wsp????pracuje d??ugie lata z gospodarstwami poznaj??c
                        najnowsze potrzeby rynku. Dzia??alno??ci?? firmy jest
                        produkcja maszyn rolniczych g????wnie do dozowania,
                        czyszczenia,polerowania,sortowania warzyw i pakowania.
                        Realizujemy nietypowe zam??wienia jak r??wnie?? produkujemy
                        seryjnie. Zapewniamy profesjonaln?? i fachow?? obs??ug??
                        klienta, kt??rej skutkiem jest wyposa??enie w nowoczesne i
                        zautomatyzowane urz??dzenia i linie produkcyjne. Dla nas
                        najwa??niejsza jest, jako???? i d??uga bezproblemowa
                        sprawno???? wykonywanych maszyn, dlatego ci??gle szukamy
                        nowoczesnych rozwi??za?? technologicznych. Dla tego
                        dok??adamy wszelkich stara??, aby nasza firma rozwija??a
                        si?? dynamicznie w bran??y produkcyjnej maszyn rolniczych.
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
