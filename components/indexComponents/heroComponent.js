/** @format */

import Image from "next/image";
import styled from "styled-components";
import { colors, fontWeight, fontSize, zIndex } from "../../utils";

const Container = styled.section`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ContainerInner = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 1024px) {
        top: 100px;

        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

const ImageOuter = styled.div`
    position: relative;
    width: 90%;
    height: 100vh;

    clip-path: polygon(0 0, 75% 0, 100% 100%, 0% 100%);

    @media (min-width: 1024px) {
        width: 70%;
        height: 70vh;
    }
`;

const TextDivStyled = styled.div`
    position: relative;
    z-index: ${zIndex.level4};

    @media (min-width: 1024px) {
        width: 40%;
    }
`;

const Subject = styled.h1`
    margin: 0 0 0 20px;

    color: ${colors.mainHEX};
    font-size: ${fontSize.bigFont};
    font-weight: ${fontWeight.fontWeightMedium};

    @media (min-width: 1024px) {
        font-size: ${fontSize.bigFontDesktop};
    }
`;

const Paragraph = styled.p`
    margin: 20px 20px 0 20px;
    font-size: ${fontSize.smallFont};

    color: ${colors.darkGreyHEX};

    @media (min-width: 1024px) {
        font-size: ${fontSize.midFont};
    }
`;

const HelperDiv = styled.div`
    width: 100%;
    height: 100px;
    background: ${colors.defaultWhiteHEX};
    clip-path: polygon(0 75%, 100% 0, 100% 100%, 0% 100%);

    @media (min-width: 1024px) {
        z-index: ${zIndex.levelMinus1};
        height: 250px;
        clip-path: polygon(0 100%, 100% 0, 100% 100%, 0% 100%);
    }
`;

const Hero = () => {
    return (
        <Container>
            <ContainerInner>
                <ImageOuter>
                    <Image
                        src='/firstImage.jpg'
                        layout='fill'
                        objectFit='cover'
                    />
                </ImageOuter>
                <TextDivStyled>
                    <Subject>
                        MASZYNY ROLCZNICZE
                        <br />W ZASIĘGU TWOJEJ DŁONI
                    </Subject>
                    <Paragraph>
                        Dla nas najważniejsza jest, jakość i długa bezproblemowa
                        sprawność wykonywanych maszyn, dlatego ciągle szukamy
                        nowoczesnych rozwiązań technologicznych oraz dokładamy
                        wszelkich starań, aby nasze produkty były w dalszym
                        ciągu niezawodne
                    </Paragraph>
                </TextDivStyled>
            </ContainerInner>
            <HelperDiv />
        </Container>
    );
};

export default Hero;
