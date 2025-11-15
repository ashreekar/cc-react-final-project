import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../../utils/auth.slice'
import { useDispatch } from 'react-redux'
import Button from '../ButtonsNdInputs/Button'
import Input from '../ButtonsNdInputs/Input'
import Logo from '../HeaderandFooter/Logo'
import { authService } from '../../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { register, handlerSubmit } = useForm()
    const [err, setErr] = useState("")
    const [loading, setLaoding] = useState(false)

    const login = async (data) => {
        setErr("")
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser()

                if (userData) {
                    dispatch(authLogin(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            setErr(error.message)
        }
    }

    return (
        <div
            className='flex items-center justify-center w-full'
        >
            <div className=''>SignIn</div>
            {
                err && <p className='text-red-500'>{err}</p>
            }

            <form onSubmit={handlerSubmit(login)}>
                <div className='space-y-5'>
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {
                        ...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => "regex".test(value) || "Email adress must be valid"
                            }
                        })
                        }
                    />
                    <Input
                        label="Password: "
                        placeholder="Enter your password"
                        type="password"
                        {
                        ...register("password", {
                            required: true,
                        })
                        }
                    />
                </div>
                <Button
                type='submit'>Sign In</Button>
            </form>
        </div>
    )
}

export default Login