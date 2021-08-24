/** @format */

import styled from "styled-components";
import Link from "next/link";
import { colors, zIndex, fontSize, fontWeight } from "../../utils";
import Image from "next/image";
import Hamburger from "./hamburger";

const HeaderStyled = styled.header`
    width: 100%;
    height: 100px;
    background: ${colors.defaultWhiteHEX};
    position: fixed;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    z-index: ${zIndex.level8};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
`;

const Anchor = styled.a`
    height: 100%;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;

    @media (min-width: 1024px) {
        flex-grow: 8;
        justify-content: flex-start;
        align-items: center;
    }
`;
const AnchorLink = styled.a`
    width: fit-content;
    position: relative;
    display: none;
    color: ${colors.mainHEX};
    font-size: ${fontSize.bigFont};
    font-weight: ${fontWeight.fontWeightMedium};
    cursor: pointer;
    overflow: hidden;

    margin: 15px 15px;
    text-decoration: none;
    z-index: ${zIndex.level9};
    transition-duration: 0.2s;

    @media (min-width: 1024px) {
        display: block;
        flex-grow: 1;
    }

    &::after {
        content: "";
        position: absolute;
        left: -70%;
        bottom: 0;
        width: 70%;
        height: 3px;
        background: ${colors.darkGreyHEX};
        transition-duration: 0.2s;
    }

    &:hover::after {
        transform: translateX(70%);
    }

    &:hover {
        transform: scale(1.1);
        color: ${colors.darkGreyHEX};
    }
`;

const Header = () => {
    return (
        <HeaderStyled>
            <Link href='/'>
                <Anchor>
                    <Image
                        src='/logo.png'
                        width='150'
                        height='40'
                        quality='100'
                    />
                </Anchor>
            </Link>

            <Link href='/'>
                <AnchorLink>HOME</AnchorLink>
            </Link>

            <Link href='/about'>
                <AnchorLink>O NAS</AnchorLink>
            </Link>

            <Link href='/categories'>
                <AnchorLink>PRODUKTY</AnchorLink>
            </Link>

            <Link href='/contact'>
                <AnchorLink>KONTAKT</AnchorLink>
            </Link>
            <Hamburger />
        </HeaderStyled>
    );
};
export default Header;
