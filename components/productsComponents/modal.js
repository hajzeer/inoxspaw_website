/** @format */
import { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import { colors, fontWeight, fontSize, zIndex } from "../../utils";

import Image from "next/image";

const Container = styled.section`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    display: ${(props) => (props.visibility ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.85);
`;

const ImageContainer = styled.div`
    position: relative;
    background: #fff;
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    clip-path: polygon(0 20%, 100% 0%, 100% 80%, 0% 100%);
`;
const ImageOuter = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: ${zIndex.level1};
    align-self: center;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ArrowButtonPrev = styled.button`
    background: transparent;
    border: none;
    position: absolute;
    top: 40%;
    left: 15px;
    transition-duration: 0.2s;
    z-index: ${zIndex.level5};

    &:active {
        transform: translateX(-5px);
    }
`;
const ArrowButtonNext = styled.button`
    position: absolute;
    background: transparent;
    border: none;
    top: 40%;
    right: 15px;
    transition-duration: 0.2s;
    z-index: ${zIndex.level5};

    &:active {
        transform: translateX(5px);
    }
`;
const fadeIn = keyframes`
  from {
    transform: scale(.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.9);
    opacity: 1;
  }
`;
const ImageStyled = styled(Image)`
    display: inline-block;
    visibility: ${(props) => (props.active ? "visible" : "hidden")};
    animation: ${(props) => (props.active ? fadeIn : fadeOut)} 0.2s linear;
    transition: visibility 0.2s linear;
`;

const ButtonStyled = styled.button`
    position: absolute;
    background: transparent;
    border: none;
    z-index: ${zIndex.level5};
    top: 100px;
    right: 60px;
    width: 30px;
    height: 30px;
`;

const ButtonDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: none;

    &::after {
        content: "";
        position: absolute;

        width: 100%;
        height: 3px;
        background: ${colors.darkGreyHEX};
        border-radius: 25px;
        top: 50%;
        transform: rotate(45deg);
    }
    &::before {
        position: absolute;

        content: "";
        width: 100%;
        height: 3px;
        background: ${colors.darkGreyHEX};

        border-radius: 25px;
        top: 50%;
        transform: rotate(-45deg);
    }
`;

const Modal = (
    { isVisible, prevSlide, nextSlide, items, current, setVisibility },
    ref
) => {
    return (
        <Container visibility={isVisible}>
            <ButtonStyled onClick={setVisibility}>
                <ButtonDiv />
            </ButtonStyled>

            <ImageContainer>
                <ArrowButtonPrev onClick={prevSlide}>
                    <i className='gg-chevron-left'></i>
                </ArrowButtonPrev>
                <ArrowButtonNext onClick={nextSlide}>
                    <i className='gg-chevron-right'></i>
                </ArrowButtonNext>
                {items.Images.map((image, index) => {
                    return (
                        <>
                            {index === current && (
                                <ImageOuter key={index} ref={ref}>
                                    <ImageStyled
                                        active={current === index}
                                        src={image.url}
                                        layout='fill'
                                        objectFit='scale-down'
                                    />
                                </ImageOuter>
                            )}
                        </>
                    );
                })}
            </ImageContainer>
        </Container>
    );
};

const ForwardModal = forwardRef(Modal);

export default ForwardModal;
