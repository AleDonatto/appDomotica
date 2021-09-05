import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Context } from '../hooks/Context'
import { useHistory } from 'react-router'

export const Login = () => {
    const [initialState, setinitialState] = useState({
        email: '',
        password: ''
    })
    const { email, password } = initialState
    const {context,setcontext} = useContext(Context)
    const history = useHistory()

    const handleInputChanges = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;

        setinitialState({
            ...initialState,
            [name] : value
        })
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        const body = {email:email, password:password}

        const {data} = await axios.post("http://127.0.0.1:8000/api/loginUser",body)
        console.log(data)

        if(data.status === 200){
            const {id, name, email} = data.data
            console.log(id, name, email)

            setcontext({
                ...context,
                id: id,
                name: name,
                email: email,
                isLogged: true
            })

            history.push("/home");
        }
    
    }

    return (
        <div>
            <div className="container m-5 p-10">
                <div className="mt-2 p-5 bg-white shadow-2xl rounded-lg">
                    <h2 className="text-black fonst-sans font-semibold text-3xl tracking-widest">Login</h2>
                    <div className="flex items-center justify-center">
                        <div className="w-full max-w-md">
                            <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" onSubmit={handleSubmit} method="POST">
                                <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="email">Email</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="email" name="email" onChange={handleInputChanges} value={email}/>
                                </div>

                                <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-normal mb-2">Password</label>
                                <input type="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                                onChange={handleInputChanges} value={password}/>
                                </div>

                                <div className="flex items-center justify-between">
                                <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-gray-600 hover:bg-blue-600 focus:bg-blue-700" type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
