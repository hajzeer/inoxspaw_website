/** @format */

import { useRef, useContext } from "react";
import styled from "styled-components";
import { colors, zIndex, fontSize } from "../utils";
import Layout from "../layout/layout";
import { client } from "../graphql/apollo-client.js";
import { GET_PRODUCTS } from "../graphql/queries";
import Image from "next/image";
import { OpitonContext } from "../context/OptionContext";

const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 50px 0;

    @media (min-width: 1024px) {
        height: 90vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;
const ContactFormStyled = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 50px 0;

    @media (min-width: 1024px) {
        width: 60%;
    }
`;

const InputStyle = styled.input.attrs((props) => ({
    // we can define static props
    type: "text",
    // or we can define dynamic ones
}))`
    font-family: "Oswald", sans-serif;

    width: 300px;
    height: 30px;
    padding: 0 10px;
    border-radius: 25px;
    border: 1px solid ${colors.darkGreyHEX};
    font-size: ${fontSize.smallFont};
    text-transform: uppercase;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    &::placeholder {
        font-family: "Oswald", sans-serif;
        color: ${colors.darkGreyHEX};
    }

    &:focus {
        border: 3px solid ${colors.mainHEX};
        outline: none;
    }

    @media (min-width: 1024px) {
        width: 500px;

        height: 30px;
    }
`;

const SelectStyled = styled.select`
    width: 320px;
    padding: 0 10px;
    font-size: ${fontSize.smallFont};
    text-transform: uppercase;
    background: ${colors.defaultWhiteHEX};
    height: 35px;
    border-radius: 25px;
    border: 1px solid ${colors.darkGreyHEX};
    font-family: "Oswald", sans-serif;
    color: ${colors.darkGreyHEX};
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    &:focus {
        border: 3px solid ${colors.mainHEX};
        outline: none;
    }

    @media (min-width: 1024px) {
        width: 520px;
    }
`;

const OptionStyled = styled.option`
    font-family: "Oswald", sans-serif;
    background: ${colors.defaultWhiteHEX};
    font-size: ${fontSize.smallFont};
    text-transform: uppercase;
`;

const TextAreaStyle = styled.textarea.attrs((props) => ({
    type: "text",
}))`
    &::placeholder {
        font-size: ${fontSize.smallFont};
        font-family: "Oswald", sans-serif;
        color: ${colors.darkGreyHEX};
    }
    resize: none;
    padding: 10px;
    width: 300px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    height: 130px;
    border-radius: 25px;
    border: 1px solid ${colors.darkGreyHEX};
    font-size: ${fontSize.smallFont};
    text-transform: uppercase;

    font-family: "Oswald", sans-serif;

    &:focus {
        border: 3px solid ${colors.mainHEX};
        outline: none;
    }

    @media (min-width: 1024px) {
        width: 500px;
    }
`;

const ButtonStyled = styled.button`
    margin: 20px 0 0 0;
    padding: 0;
    position: relative;

    outline: none;

    cursor: pointer;

    width: 100px;
    height: 30px;
    border: none;

    z-index: ${zIndex.level4};

    color: ${colors.defaultWhiteHEX};
    font-family: "Oswald", sans-serif;

    &::before {
        outline: none;

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
        outline: none;
        transform: translateX(-6px) translateY(-6px);
        z-index: ${zIndex.levelMinus2};
    }

    &:focus::before {
        outline: none;

        transform: translateX(-6px) translateY(-6px);
        z-index: ${zIndex.levelMinus2};
    }

    &::after {
        outline: none;

        content: "WY??LIJ";
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
        outline: none;

        transform: translateX(6px) translateY(6px);
    }
    &:focus::after {
        outline: none;

        transform: translateX(6px) translateY(6px);
        z-index: ${zIndex.levelMinus2};
    }
`;

const ImageOuter = styled.div`
    display: none;

    @media (min-width: 1024px) {
        display: inline-block;
        width: 70%;
        height: 70%;
        position: relative;

        clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
        z-index: ${zIndex.levelMinus1};
    }
`;

const LabelStyled = styled.label``;

const ContactForm = ({ products }) => {
    let name = useRef(null);
    let email = useRef(null);
    let message = useRef(null);

    const { isOption } = useContext(OpitonContext);

    async function handleOnSubmit(e) {
        e.preventDefault();

        const formData = {};

        Array.from(e.currentTarget.elements).forEach((field) => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });

        await fetch("/api/mail", {
            method: "POST",
            body: JSON.stringify(formData),
        });

        name.value = "";
        email.value = "";
        message.value = "";
    }

    return (
        <Layout>
            <Container>
                <ContactFormStyled method='post' onSubmit={handleOnSubmit}>
                    <LabelStyled>Imi?? i nazwisko</LabelStyled>
                    <InputStyle
                        ref={(el) => (name = el)}
                        type='text'
                        placeholder='Imi?? i nazwisko'
                        name='name'
                    />
                    <LabelStyled>Email</LabelStyled>
                    <InputStyle
                        ref={(el) => (email = el)}
                        type='email'
                        placeholder='Email'
                        name='email'
                    />
                    <LabelStyled>Temat</LabelStyled>
                    <SelectStyled name='option'>
                        {products.map(({ Name, id }) => {
                            return (
                                <>
                                    {Name !== isOption ? null : (
                                        <OptionStyled value={isOption} selected>
                                            {isOption}
                                        </OptionStyled>
                                    )}
                                    <OptionStyled key={id} value={Name}>
                                        {Name}
                                    </OptionStyled>
                                </>
                            );
                        })}
                        <OptionStyled value='INNE'>INNE</OptionStyled>
                    </SelectStyled>
                    <LabelStyled>Wiadomo????</LabelStyled>
                    <TextAreaStyle
                        ref={(el) => (message = el)}
                        placeholder='WIADOMO????'
                        name='message'
                    />
                    <ButtonStyled></ButtonStyled>
                </ContactFormStyled>
                <ImageOuter>
                    <Image
                        src='/thirdImage.jpg'
                        layout='fill'
                        objectFit='cover'
                    />
                </ImageOuter>
            </Container>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const { data } = await client.query({ query: GET_PRODUCTS });

    return {
        props: {
            products: await data.products,
        },
    };
};

export default ContactForm;
