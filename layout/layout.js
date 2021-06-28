/** @format */

import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { colors } from "../utils";
import Header from "../components/layoutComponents/header";
import Footer from "../components/layoutComponents/footer";

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    background: ${colors.ligthGreyHEX};
    margin: 0;
    padding: 0;
    font-family: 'Oswald', sans-serif;
}
`;

const Container = styled.section`
    width: 100%;

    padding: 80px 0 0 0;
`;

const Layout = ({ children }) => {
    return (
        <section>
            <Head>
                <title>Inoxspaw | maszyny rolnicze w zasięgu dłoni</title>
                <link
                    href='https://css.gg/chevron-right.css'
                    rel='stylesheet'
                />
                <link href='https://css.gg/chevron-left.css' rel='stylesheet' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <GlobalStyle />
            <Header />
            <Container>{children}</Container>
            <Footer />
        </section>
    );
};
export default Layout;
