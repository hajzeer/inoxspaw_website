/** @format */

import { createContext, useState } from "react";

const OpitonContext = createContext(null);

const OpitonProvider = ({ children }) => {
    const [isOption, setIsOption] = useState(null);

    return (
        <OpitonContext.Provider value={{ isOption, setIsOption }}>
            {children}
        </OpitonContext.Provider>
    );
};

export { OpitonContext, OpitonProvider };
