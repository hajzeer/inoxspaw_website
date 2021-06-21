import styled from 'styled-components';
import Link from 'next/link';
import { colors, zIndex } from '../../utils';
import Image from 'next/image';
import Hamburger from './hamburger';

const HeaderStyled = styled.header`

width: 100%;
height: 60px;
background: ${colors.defaultWhiteHEX};
position: fixed;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
z-index: ${zIndex.level8};


`;

const Anchor = styled.a`

height: 100%;
cursor: pointer;

display: flex;
justify-content: center;
align-items: center;
margin: 20px;


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
            <Hamburger />
        </HeaderStyled>
    )
}
export default Header;