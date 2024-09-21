import React from 'react'
import service from "../AppWrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredimage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-purple-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={service.getFilePreview(featuredimage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard