import React,{useState,useEffect} from 'react'
import PostCard from "../card/PostCard"
import { service } from '../../appwrite/config'
import Container from '../conatiner/Container'

function Allposts() {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        service.getAllPost([])
        .then((posts)=>setPosts(posts?.documents || []))
    },[])
  return (
    <div>
        <Container>
            {
                posts.map((post)=>(
                    <PostCard key={post.$id} post={post} />
                ))
            }
        </Container>
    </div>
  )
}

export default Allposts