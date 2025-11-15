import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../ButtonsNdInputs/Button'
import Input from '../ButtonsNdInputs/Input'
import Logo from '../HeaderandFooter/Logo'
import RTE from "../BlogInput/RTE"
import { service } from "../../appwrite/config"

function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || ''
        }
    });

    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData)

    const submit = async (data) => {
        if (post) {
            const file = data.images[0] ? service.uploadFile(data.image[0]) : null

            if(file){
                service.deleteFile(post.featuredImage)
            }
        }
    }
    return (
        <div>PostForm</div>
    )
}

export default PostForm