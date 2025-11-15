import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../utils/auth.slice'
import { useDispatch } from 'react-redux'
import Button from '../ButtonsNdInputs/Button'
import Input from '../ButtonsNdInputs/Input'
import Logo from '../HeaderandFooter/Logo'
import { authService } from '../../appwrite/auth'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { register, handlerSubmit } = useForm()
    const [err, setErr] = useState("")
    const [loading, setLaoding] = useState(false)

    const create = async (data) => {
        setErr("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const user = await authService.getCurrentUser()
                if (user) {
                    dispatch(login(userData))
                    navigate('/')
                }
            }
        } catch (error) {
            setErr("")
        }
    }
    return (
        <div>
            <h1>SignUp</h1>

            <div>
                <form onSubmit={handlerSubmit(create)}>
                    <div>
                        <Input
                            label="Name"
                            placeholder="Enter full name"
                            {
                            ...register("name", {
                                required: true
                            })
                            }
                        />
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
                type='submit'>Sign Up</Button>
                </form>
            </div>
        </div>
    )
}

export default Signup