/** @format */

import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { colors, zIndex } from "../../utils";
import gsap from "gsap";
import NavBar from "./NavBar";

const ButtonStyled = styled.button`
    width: 40px;
    height: 40px;
    position: relative;
    background: transparent;
    border: none;
    z-index: ${zIndex.level9};
    margin: 20px;
    cursor: pointer;

    @media (min-width: 1024px) {
        display: none;
    }
`;

const SpanTopStyled = styled.div`
    position: absolute;
    top: 40%;
    left: 0;
    width: 100%;
    border-radius: 25px;
    border-top: 4px solid ${colors.mainHEX};
`;
const SpanBottomStyled = styled.div`
    position: absolute;
    left: 0;
    top: 60%;
    width: 100%;
    border-radius: 25px;
    border-bottom: 4px solid ${colors.mainHEX};
`;

const Hamburger = () => {
    const [isVisible, setIsVisible] = useState({
        initial: false,
        clicked: null,
    });

    const SpanTop = useRef(null);
    const SpanTopTween = useRef(null);
    const SpanBottom = useRef(null);
    const SpanBottomTween = useRef(null);

    useEffect(() => {
        if (isVisible.clicked === true) {
            SpanTopTween.current = gsap.to(SpanTop.current, {
                duration: 0.3,
                x: "40px",
                y: "-15px",
                rotate: "-20deg",
                ease: "power4.out",
            });
            gsap.to(SpanTop.current, {
                duration: 0.3,
                css: { width: "100%", height: "100%", borderRadius: "100%" },
            });
            gsap.to(SpanTop.current, {
                duration: 0.2,
                delay: 0.1,
                rotate: "225deg",
            });
            gsap.to(SpanTop.current, {
                duration: 0.3,
                delay: 0.2,
                css: { width: "100%", height: "0", borderRadius: "25px" },
            });
            gsap.to(SpanTop.current, {
                duration: 0.3,
                delay: 0.2,
                y: "0",
                x: "0",
            }),
                (SpanBottomTween.current = gsap.to(SpanBottom.current, {
                    duration: 0.5,
                    rotate: "-45deg",
                    y: "-8px",
                    ease: "power4.out",
                }));
        }
        if (isVisible.clicked === false)
            (SpanTopTween.current = gsap.to(SpanTop.current, {
                duration: 0.3,
                rotate: "0deg",
                y: 0,
            })),
                (SpanBottomTween.current = gsap.to(SpanBottom.current, {
                    duration: 0.3,
                    rotate: "0deg",
                    y: 0,
                }));
    });

    const handleVisibility = () => {
        if (isVisible.initial === false) {
            setIsVisible({
                clicked: true,
            });
        } else if (isVisible.clicked === true) {
            setIsVisible({
                clicked: !isVisible.clicked,
            });
        } else if (isVisible.clicked === false) {
            setIsVisible({
                clicked: !isVisible.clicked,
            });
        }
    };

    return (
        <div>
            <ButtonStyled onClick={handleVisibility}>
                <SpanTopStyled ref={SpanTop} />
                <SpanBottomStyled ref={SpanBottom} />
            </ButtonStyled>
            <NavBar isVisible={isVisible} handlerIsVisible={handleVisibility} />
        </div>
    );
};

export default Hamburger;
