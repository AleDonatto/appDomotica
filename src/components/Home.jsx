import React, { useContext } from 'react'
import { Context } from '../hooks/Context'

export const Home = () => {
    const {context} = useContext(Context)
    const {id, name, email, isLogged} = context 
    return (
        <div className="bg-gray-200">
            <div className="container mx-auto py-10">
                <h1>Usuario loggeado</h1>
                <div>
                    <p>id: {id}</p>
                    <p>name: {name}</p>
                    <p>email: {email}</p>
                    <p>isLogged; {isLogged ? 'success' : 'error'}</p>
                </div>
            </div>
        </div>
    )
}
