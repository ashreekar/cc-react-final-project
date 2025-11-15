import React from 'react'
import { service } from "../../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuedImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full p-4 bg-gray-100 rounded-xl'>
                <div className='w-full justify-center mb-4'>
                    <img src={service.filePreview(featuedImage)} alt={title} className='rounded-xl' />
                </div>
                <h2
                className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard