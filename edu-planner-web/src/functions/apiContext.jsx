import React, {createContext, useState} from "react";

const apiContexto = createContext();

const apiContextoConstructor = ({ children }) => {
    const [api, setApi] = useState('http://127.0.0.1:5000');

    return (
        <apiContexto.Provider value={{ api, setApi }}>
            {children}
        </apiContexto.Provider>
    );
};
