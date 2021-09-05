import { createContext } from "react";

export const Context = createContext({
    context: {
        id: 0,
        name: '',
        email: '',
        isLogged: false,
    },
    setcontext: () => {}
});