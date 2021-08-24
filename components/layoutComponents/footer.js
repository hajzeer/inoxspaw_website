/** @format */

import styled from "styled-components";
import Image from "next/image";

import { colors, fontSize, fontWeight } from "../../utils";

const FooterStyled = styled.footer`
    position: relative;
    bottom: 0;
    width: 100%;

    padding: 0 0 40px 0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);

    background: ${colors.midGreyHEX};

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;

const DataDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const MapDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const IFrameStyle = styled.iframe`
    margin: 10px 0 0 0;
    width: 300px;
    height: 300px;

    border-radius: 25px;
    border: none;

    @media (min-width: 1024px) {
        width: 350px;
        height: 350px;
    }
`;

const Subject = styled.h2`
    color: ${colors.darkGreyHEX};
    font-size: ${fontSize.midFont};
    font-weight: ${fontWeight.fontWeightMedium};

    align-self: flex-start;
    margin: 10px;
    @media (min-width: 1024px) {
        font-size: ${fontSize.bigFont};
    }
`;

const Paragraph = styled.p`
    color: ${colors.darkGreyHEX};
    font-size: ${fontSize.smallFont};
    font-weight: ${fontWeight.fontWeightMedium};

    align-self: flex-start;
    margin: 0 0 0 10px;

    @media (min-width: 1024px) {
        font-size: ${fontSize.midFont};
    }
`;

const Anchor = styled.a`
    color: ${colors.mainHEX};
    font-size: ${fontSize.smallFont};
    font-weight: ${fontWeight.fontWeightMedium};

    align-self: flex-start;
    margin: 5px 0 5px 10px;
    text-decoration: none;

    @media (min-width: 1024px) {
        font-size: ${fontSize.midFont};
    }
`;

const SocialMediaDiv = styled.div`
    width: 100%;
    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const SocialMediaButton = styled.button`
    cursor: pointer;

    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;

    background: none;
    border: none;

    @media (min-width: 1024px) {
        width: 40px;
        height: 40px;
        margin: 10px;
    }
`;

const Footer = () => {
    const handleSubmit = (e) => {
        window.open(e, "_blank");
    };

    return (
        <FooterStyled>
            <DataDiv>
                <Subject>KONTAKT</Subject>
                <Paragraph>Telefon:</Paragraph>
                <Anchor href='tel:+48 503 029 959'>+48 503 029 959</Anchor>
                <Paragraph>Email:</Paragraph>
                <Anchor href='mailto:lukaszbanaszek@inoxspaw.eu'>
                    lukaszbanaszek@inoxspaw.eu
                </Anchor>
                <Paragraph>Adres:</Paragraph>
                <Anchor href='https://goo.gl/maps/tZAfb2H3EH2WcxpPA'>
                    InoxSpaw
                    <br />
                    Kobylniki 20
                    <br />
                    28-530 Skalbmierz Poland
                </Anchor>
                <SocialMediaDiv>
                    <SocialMediaButton
                        onClick={() =>
                            handleSubmit(
                                "https://www.facebook.com/inoxspaw.eu/"
                            )
                        }>
                        <Image src='/facebook.png' width={30} height={30} />
                    </SocialMediaButton>
                    <SocialMediaButton
                        onClick={() =>
                            handleSubmit(
                                "https://www.youtube.com/channel/UC6ThmJh7H8k7BEnw8UstWmQ"
                            )
                        }>
                        <Image src='/youtube.png' width={30} height={30} />
                    </SocialMediaButton>
                </SocialMediaDiv>
            </DataDiv>
            <MapDiv>
                <IFrameStyle
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.2104736843607!2d20.440100316001622!3d50.32532440425367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717b7a8f78a45eb%3A0xece23ba9a4c86023!2s%C5%81ukasz%20Banaszek%20Inoxspaw!5e0!3m2!1spl!2spl!4v1623854815162!5m2!1spl!2spl'
                    loading='lazy'></IFrameStyle>
            </MapDiv>
        </FooterStyled>
    );
};

export default Footer;
