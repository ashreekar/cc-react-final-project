import React, { useState, useEffect, Children } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const [laoder, setLoader] = useState(true);

    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])
    return (
        <div>
            {
                laoder ? <h1>Loading..</h1> : <>{Children}</>
            }
        </div>
    )
}

export default Protected