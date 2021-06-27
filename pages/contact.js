/** @format */

import { useRef } from "react";
import styled from "styled-components";
import { colors, zIndex, fontSize } from "../utils";
import Layout from "../layout/layout";
import { client } from "../graphql/apollo-client.js";
import { GET_ALL_CATEGORIES } from "../graphql/queries";

const ContactFormStyled = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`;

const SelectStyled = styled.select`
    width: 320px;
    padding: 0 10px;
    font-size: ${fontSize.smallFont};

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
`;

const OptionStyled = styled.option`
    font-family: "Oswald", sans-serif;
    background: ${colors.defaultWhiteHEX};
    font-size: ${fontSize.smallFont};
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

        content: "WYŚLIJ";
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

const LabelStyled = styled.label``;

const ContactForm = ({ categories }) => {
    let name = useRef(null);
    let email = useRef(null);
    let message = useRef(null);

    const handleSubmit = () => {
        name.value = "";
        email.value = "";
        message.value = "";
    };

    return (
        <Layout>
            <ContactFormStyled>
                <LabelStyled>Imię i nazwisko</LabelStyled>
                <InputStyle
                    ref={(el) => (name = el)}
                    type='text'
                    placeholder='Imię i nazwisko'
                />
                <LabelStyled>Email</LabelStyled>
                <InputStyle
                    ref={(el) => (email = el)}
                    type='email'
                    placeholder='Email'
                />
                <LabelStyled>Temat</LabelStyled>
                <SelectStyled>
                    {categories.map(({ Name, id }) => {
                        return (
                            <OptionStyled key={id} value={Name}>
                                {Name}
                            </OptionStyled>
                        );
                    })}
                    <OptionStyled value='INNE'>INNE</OptionStyled>
                </SelectStyled>
                <LabelStyled>Wiadomość</LabelStyled>
                <TextAreaStyle
                    ref={(el) => (message = el)}
                    placeholder='WIADOMOŚĆ'
                />
                <ButtonStyled onClick={() => handleSubmit()}></ButtonStyled>
            </ContactFormStyled>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const { data } = await client.query({ query: GET_ALL_CATEGORIES });

    return {
        props: {
            categories: data.categories,
        },
    };
};

export default ContactForm;
