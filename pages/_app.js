/** @format */

import { OpitonProvider } from "../context/OptionContext";

function MyApp({ Component, pageProps }) {
    return (
        <OpitonProvider>
            <Component {...pageProps} />
        </OpitonProvider>
    );
}

export default MyApp;
