import Image from 'next/image';
import React from 'react';
import ReactMarkdown from "react-markdown";
import { BlogIndividualContainer } from './style';

function BlogIndividual({post}) {
  return (
    <BlogIndividualContainer>
        <h1>{post.title}</h1>
        <div className='post__individual__img'>
            <Image src={post.img.url} alt={post.title} layout="fill" />
        </div>
        <ReactMarkdown>{post.content}</ReactMarkdown>
    </BlogIndividualContainer>
  )
}

export default BlogIndividual