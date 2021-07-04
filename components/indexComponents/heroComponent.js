/** @format */

import Image from "next/image";
import styled from "styled-components";
import { colors, fontWeight, fontSize, zIndex } from "../../utils";

const Container = styled.section`
    width: 100%;
    height: 85vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ImageOuter = styled.div`
    position: relative;
    width: 100%;
    left: -40px;

    clip-path: polygon(0 0, 75% 0, 100% 100%, 0% 100%);
`;

const TextDivStyled = styled.div`
    position: relative;
    z-index: ${zIndex.level4};
`;

const Subject = styled.h1`
    margin: 0 0 0 20px;

    color: ${colors.mainHEX};
    font-size: ${fontSize.bigFont};
    font-weight: ${fontWeight.fontWeightMedium};
`;

const Paragraph = styled.p`
    margin: 20px 20px 0 20px;
    font-size: ${fontSize.smallFont};

    color: ${colors.darkGreyHEX};
`;

const HelperDiv = styled.div`
    width: 100%;
    height: 300px;
    background: ${colors.defaultWhiteHEX};
    clip-path: polygon(0 75%, 100% 0, 100% 100%, 0% 100%);
`;

const Hero = () => {
    return (
        <Container>
            <ImageOuter>
                <Image src='/firstImage.jpg' width={400} height={300} />
            </ImageOuter>
            <TextDivStyled>
                <Subject>
                    MASZYNY ROLCZNICZE
                    <br />W ZASIĘGU TWOJEJ DŁONI
                </Subject>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec fermentum libero ac odio convallis, ut feugiat felis
                    viverra. Duis sollicitudin iaculis aliquet.
                </Paragraph>
            </TextDivStyled>
            <HelperDiv />
        </Container>
    );
};

export default Hero;
