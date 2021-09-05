import React, { useState } from 'react'
import { Context } from './Context'

export const ProviderContext = ({children}) => {
    const [context, setcontext] = useState({
        id: 0,
        name: '',
        email: '',
        isLogged: false,
    })

    return (
        <Context.Provider value={{context, setcontext}}>
            {children}
        </Context.Provider>
    )
}