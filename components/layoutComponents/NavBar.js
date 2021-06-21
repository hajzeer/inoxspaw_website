import { useRef, useEffect } from "react";
import Link from 'next/link';
import styled from "styled-components";
import { colors, zIndex, fontSize, fontWeight } from "../../utils";
import gsap from 'gsap';

const Container = styled.section`
position: fixed;
width: 100%;
height: 100vh;

left: 100%;
top: 0;

display: flex;
flex-direction: column;
justify-content: center;

background: ${colors.ligthGreyHEX};
z-index: ${zIndex.level8};

`;

const Helper = styled.div`
position: absolute;
width: 100%;
height: 100vh;

background: ${colors.mainHEX};
z-index: ${zIndex.level7};

`;

const Anchor = styled.a`
color: ${colors.mainHEX};
font-size: ${fontSize.bigFont};
font-weight: ${fontWeight.fontWeightMedium};
cursor: pointer;

margin:  10px 0 10px  15px;
text-decoration: none;
z-index: ${zIndex.level9};

`;

const InnerHelper = styled.div`

position: absolute;
top: 20px;
left: 0;
width: 100%;
height: 600px;
background: ${colors.defaultWhiteHEX};

clip-path: polygon(0 30%, 100% 0, 100% 70%, 0% 100%);

`;

const NavBar = ({isVisible, handlerIsVisible}) => {
  
    const NavBarRef =           useRef(null);
    const NavBarRefTween =      useRef(null);
    const NavBarHelper =        useRef(null);
    const NavBarHelperTween =   useRef(null);
    
    useEffect(()=> {

        if(isVisible.clicked === true) {
            NavBarHelperTween.current =     gsap.to(NavBarHelper.current,{duration: .5, xPercent: -100,  ease: 'Power4.easeOut', delay: .3})
            NavBarRefTween.current =        gsap.to(NavBarRef.current,{duration: 1, xPercent: -100,ease: 'Power4.easeOut', delay: .4})
        } else if(isVisible.clicked === false) {

            NavBarRefTween.current =        gsap.to(NavBarRef.current,{duration: 1,xPercent: 100, ease: 'Power4.easeOut'})
        
        }
        
    }, [isVisible])

    


    return(
        <Container ref={NavBarRef}>
            <Helper ref={NavBarHelper}/>
            <InnerHelper />

            <Link href='/'>
                <Anchor onClick={handlerIsVisible}>
                    HOME
                </Anchor>
            </Link>
            
            <Link href='/about'>
                <Anchor onClick={handlerIsVisible}>
                    O NAS
                </Anchor>
            </Link>

            <Link href='/products'>
                <Anchor onClick={handlerIsVisible}>
                    PRODUKTY
                </Anchor>
            </Link >
            
            <Link href='/contact'>
                <Anchor onClick={handlerIsVisible}>
                    KONTAKT
                </Anchor>
            </Link>
        </Container>
    )
}

export default NavBar;