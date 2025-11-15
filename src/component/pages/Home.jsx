import React, { useEffect, useState } from 'react'
import { service } from '../../appwrite/config'
import Container from '../conatiner/Container'
import PostCard from "../card/PostCard"

function Home() {
    const [post, setpost] = useState([])

    useEffect(() => {
        service.getAllPost().then((post) => {
            if (post) {
                setpost(post.documents)
            }
        })
    }, [])

    if (post.length === 0) {
        return <p>No posts available</p>
    }
    return (
        <div>
            {
                post.map(item => (
                    <PostCard {...item}/>
                ))
            }
        </div>
    )
}

export default Home